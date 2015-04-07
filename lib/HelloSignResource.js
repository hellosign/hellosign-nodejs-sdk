'use strict';

var http = require('http');
var https = require('https');
var request = require('request');
var path = require('path');
var when = require('when');
var FormData = require('form-data');
var utils = require('./utils');
var Error = require('./Error');
var fs = require('fs');

var hasOwn = {}.hasOwnProperty;

// Provide extension mechanism for HelloSign Resource Sub-Classes
HelloSignResource.extend = utils.protoExtend;

// Expose method-creator & prepared (basic) methods
HelloSignResource.method = require('./HelloSignMethod');
HelloSignResource.BASIC_METHODS = require('./HelloSignMethod.basic');

/**
 * Encapsulates request logic for a HelloSign Resource
 */
function HelloSignResource(hellosign, urlData) {

    this._hellosign = hellosign;
    this._urlData = urlData || {};

    this.basePath = utils.makeURLInterpolator(hellosign.getApiField('basePath'));
    this.path = utils.makeURLInterpolator(this.path);

    if (this.includeBasic) {
        this.includeBasic.forEach(function(methodName) {
            this[methodName] = HelloSignResource.BASIC_METHODS[methodName];
        }, this);
    }

    this.initialize.apply(this, arguments);

}

HelloSignResource.prototype = {

    path: '',

    initialize: function() {},

    createFullPath: function(commandPath, urlData, oauthRequest) {

        var pathPrefix = oauthRequest === true ? "/" : this.basePath(urlData);

        return path.join(
            pathPrefix,
            this.path(urlData),
                typeof commandPath == 'function' ?
                commandPath(urlData) : commandPath
        ).replace(/\\/g, '/'); // ugly workaround for Windows
    },

    createUrlData: function() {
        var urlData = {};
        // Merge in baseData
        for (var i in this._urlData) {
            if (hasOwn.call(this._urlData, i)) {
                urlData[i] = this._urlData[i];
            }
        }
        return urlData;
    },

    createDeferred: function(callback) {
        var deferred = when.defer();

        if (callback) {
            // Callback, if provided, is a simply translated to Promise'esque:
            // (Ensure callback is called outside of promise stack)
            deferred.promise.then(function(res) {
                setTimeout(function(){
                    callback(null, res)
                }, 0);
            }, function(err) {
                setTimeout(function(){
                    callback(err, null);
                }, 0);
            });
        }

        return deferred;
    },

    _timeoutHandler: function(timeout, req, callback) {
        var self = this;
        return function() {
            var timeoutErr = new Error('ETIMEDOUT');
            timeoutErr.code = 'ETIMEDOUT';

            req._isAborted = true;
            req.abort();

            callback.call(
                self,
                new Error.HelloSignConnectionError({
                    message: 'Request aborted due to timeout being reached (' + timeout + 'ms)',
                    detail: timeoutErr
                }),
                null
            );
        }
    },

    _responseHandler: function(req, callback) {
        var self = this;
        return function(res) {
            var resHeaders = res.headers;
            if ('content-type' in resHeaders && resHeaders['content-type'] == "application/json"){
                var response = '';
                res.setEncoding('utf8');
                res.on('data', function(chunk) {
                    response += chunk;
                });
                res.on('end', function() {
                    try {
                        if(response == "\n" || response == ""){
                            response = {};
                        } else {
                            response = JSON.parse(response);
                        }
                        if (response.error) {
                            var err;
                            var err_data = {};
                            if(typeof response.error === 'object'){
                                err_data = response.error;
                            } else if(typeof response.error === 'string'){
                                err_data['error_name'] = response.error;
                                err_data['error_msg'] = response.error_description;
                            }

                            err = Error.HelloSignError.generate(err_data);
                            return callback.call(self, err, null);
                        }
                    } catch (e) {
                        return callback.call(
                            self,
                            new Error.HelloSignAPIError({
                                message: 'Invalid JSON received from the HelloSign API',
                                response: response,
                                exception: e
                            }),
                            null
                        );
                    }
                    callback.call(self, null, response);
                });
            } else if ('content-transfer-encoding' in resHeaders && resHeaders['content-transfer-encoding'] == "binary"){
                callback.call(self, null, res);
            }
        };
    },

    _errorHandler: function(req, callback) {
        var self = this;
        return function(error) {
            if (req._isAborted) return; // already handled
            callback.call(
                self,
                new Error.HelloSignConnectionError({
                    message: 'An error occurred with our connection to HelloSign',
                    detail: error
                }),
                null
            );
        }
    },
    _prepareOpts : function(data){

        if('signers' in data && Array.isArray(data.signers)){
            for(var i=0; i<data.signers.length;i++) {
                for(var signerIndex in data.signers[i]){
                    if(data.signers[i].hasOwnProperty(signerIndex)){
                        if('role' in data.signers[i]){
                            if(signerIndex == 'role'){
                                continue;
                            }
                            data["signers[" + data.signers[i]['role'] + "][" + signerIndex + "]"] = data.signers[i][signerIndex];
                        } else {
                            data["signers[" + i + "][" + signerIndex + "]"] = data.signers[i][signerIndex];
                        }
                    }
                }
            }
            delete data.signers;
        }
        if('cc_email_addresses' in data && Array.isArray(data.cc_email_addresses)){
            for(var i=0; i<data.cc_email_addresses.length;i++) {
                if(typeof data.cc_email_addresses[i]){
                    data["cc_email_addresses[" + i + "]"] = data.cc_email_addresses[i];
                }
            }
            delete data.cc_email_addresses;
        }

        //embedded endpoints adds
        if ('cc_roles' in data && Array.isArray(data.cc_email_addresses)) {
            for(var i=0; i < data.cc_roles.length; i++) {
                if(typeof data.cc_roles[i]){
                    data['cc_roles['+ i + ']'] = data.cc_roles[i];
                }
            }
            delete data.cc_roles;
        }

        if ('ccs' in data && Array.isArray(data.ccs)){
            for (var i=0; i < data.ccs.length; i++){
                data['ccs[' + data.ccs[i]['role_name'] + '][email_address]'] = data.ccs[i].email_address;
            }
            delete data.ccs;
        }

        if ('signer_roles' in data && Array.isArray(data.signer_roles)){
            for(var i=0; i < data.signer_roles.length; i++){
                if(data.signer_roles[i].hasOwnProperty('name')) {
                    data['signer_roles[' + i + '][name]'] = data.signer_roles[i]['name'];
                }
                if(data.signer_roles[i].hasOwnProperty('name')) {
                    data['signer_roles[' + i + '][order]'] = data.signer_roles[i]['order'];
                }
            }
            delete data.signer_roles;
        }

        if('template_ids' in data && Array.isArray(data.template_ids)){
            for(var i=0; i<data.template_ids.length;i++) {
                if(typeof data.template_ids[i]){
                    data["template_ids[" + i + "]"] = data.template_ids[i];
                }
            }
            delete data.template_ids;
        }

        if('templates' in data && Array.isArray(data.templates)){
            for(var i=0; i<data.templates.length;i++) {
                for(var templateIndex in data.templates[i]){
                    if(data.templates[i].hasOwnProperty(templateIndex)){
                        data["templates[" + i + "][" + templateIndex + "]"] = data.templates[i][templateIndex];
                    }
                }
            }
            delete data.templates;
        }

        if('clientId' in data) {
            data['client_id'] = data.clientId;
            delete data.clientId;
        }
        // Used for OAuth only, not needed for request
        if('client_secret' in data) {
            delete data.client_secret;
        }

        for(var prop in data){
            if (data.hasOwnProperty(prop)){
                if (typeof data[prop] === "object" && prop != "files"){
                    for(var paramName in data[prop]){
                        if(data[prop].hasOwnProperty(paramName)){
                            data[prop + "[" + paramName + "]"] = data[prop][paramName];
                        }
                    }
                    delete data[prop];
                }
            }
        }

        if('files' in data && Array.isArray(data.files)){
            // submit as form
            var form = new FormData();
            for(var i=0; i<data.files.length;i++) {
                form.append("file[" + i + "]", fs.createReadStream(data.files[i]));
            }
            delete data.files;
            for(var paramName in data){
                if(data.hasOwnProperty(paramName)){
                    form.append(paramName, data[paramName]);
                }
            }
            return {requestData: "", formData: form}
        } else {
            // #TODO #DEBUG
            // console.log(data);
            var requestData = utils.stringifyRequestData(data || {});
            return {requestData: requestData, formData: null}
        }
    },
    _request: function(method, path, data, auth, callback) {
        var self = this;
        var apiVersion = this._hellosign.getApiField('version');
        var headers = {
            // Use specified auth token or use default from this hellosign instance:
            'Authorization': auth ?
                'Basic ' + new Buffer(auth + ':').toString('base64') :
                this._hellosign.getApiField('auth'),
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            //'Content-Length': requestData.length,
            'User-Agent': 'HelloSign/v1 NodeBindings/' + this._hellosign.getConstant('PACKAGE_VERSION')
        };
        var preparedData = this._prepareOpts(data);

        var form = preparedData.formData;
        var requestData = preparedData.requestData;

        if(form){
            var formHeaders = form.getHeaders();
            for (var i in formHeaders) {
                if (hasOwn.call(formHeaders, i)) {
                    headers[i] = formHeaders[i];
                }
            }
        }

        if (apiVersion) {
            headers['HelloSign-Version'] = apiVersion;
        }
        // Grab client-user-agent before making the request:
        this._hellosign.getClientUserAgent(function(cua) {
            headers['X-HelloSign-Client-User-Agent'] = cua;
            makeRequest();
        });
        function makeRequest() {

            var timeout = self._hellosign.getApiField('timeout');
            var isInsecureConnection = self._hellosign.getApiField('protocol') == 'http';
            var host = self._hellosign.getApiField('host');
            var host = path.indexOf('oauth') === -1 ? host : host.replace('api', 'www');
            // Add params for dev environment
            path = self._hellosign.isDev() ? '/apiapp_dev.php' + path : path;
            var req = (
                isInsecureConnection ? http : https
                ).request({
                    host: host,
                    port: self._hellosign.getApiField('port'),
                    path: path,
                    method: method,
                    rejectUnauthorized: self._hellosign.isDev()? false : true,
                    requestCert: true,
                    headers: headers,
                    ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
                });
            if(form != null){
                form.pipe(req);
            }
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
            req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
            req.on('response', self._responseHandler(req, callback));
            req.on('error', self._errorHandler(req, callback));
            req.on('socket', function(socket) {
                socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function() {
                    // Send payload; we're safe:
                    req.write(requestData);
                    // If not using form, end here
                    if (form == null) {
                        req.end();
                    }
                });
            });
            req.on('finish', function(){
                // Waits for finish event when using form
                req.end();
            });

        }
    }
};

module.exports = HelloSignResource;
