'use strict';

/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2015 hellosign.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var http = require('http');
var https = require('https');
var path = require('path');
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
        return (() => {
            let resolve;
            let reject;

            let p = new Promise((res, rej) => {
                resolve = res;
                reject = rej;
            })

            if (callback) {
                // Callback, if provided, is a simply translated to Promise'esque:
                // (Ensure callback is called outside of promise stack)
                p.then(function(res) {
                    setTimeout(function(){
                        callback(null, res)
                    }, 0);
                }).catch(function(err) {
                    setTimeout(function(){
                        callback(err, null);
                    }, 0);
                });
            }

            return {
                promise: p,
                reject,
                resolve
            }
        })()
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
            var statusCode = res.statusCode;
            var statusMessage = res.statusMessage;

            if ('content-type' in resHeaders && resHeaders['content-type'].indexOf("application/json") !== -1){

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

                        response.resHeaders = resHeaders;
                        response.statusCode = statusCode;
                        response.statusMessage = statusMessage;

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
            // Simplified response for code-only statuses
            } else if ('content-length' in resHeaders && resHeaders['content-length'] <= "1") {
                response = {};
                response.resHeaders = resHeaders;
                response.statusCode = statusCode;
                response.statusMessage = statusMessage;
                callback.call(self, null, response);
            } else {
                callback.call(self, null, res);
            }
        };
    },

    _errorHandler: function(req, callback) {
        var self = this;
        return function(error) {
            if (req._isAborted) return; // already handled
            if (!error || !error.message) {
                error = {
                    message: 'An error occurred with our connection to HelloSign',
                    detail: error
                };
            }
            callback.call(
                self,
                new Error.HelloSignConnectionError(error),
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
                if(data.signer_roles[i].hasOwnProperty('order')) {
                    data['signer_roles[' + i + '][order]'] = data.signer_roles[i]['order'];
                }
            }
            delete data.signer_roles;
        }

        if ('merge_fields' in data && Array.isArray(data.merge_fields)){
            data.merge_fields = JSON.stringify(data.merge_fields);
        }

        if ('custom_fields' in data && Array.isArray(data.custom_fields)){
            data.custom_fields = JSON.stringify(data.custom_fields);
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

        if ('form_fields_per_document' in data && Array.isArray(data.form_fields_per_document)){
            data.form_fields_per_document = JSON.stringify(data.form_fields_per_document);
        }

        // Deprecated, but saving for compatibility
        if('clientId' in data) {
            data['client_id'] = data.clientId;
            delete data.clientId;
        }

        // Correct syntax; will overwrite the above.
        if('client_id' in data) {
            data['client_id'] = data.client_id;
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
            var requestData = utils.stringifyRequestData(data || {});
            return {requestData: requestData, formData: null}
        }
    },
    _request: function(method, path, data, auth, callback) {
        var self = this;
        var apiVersion = this._hellosign.getApiField('version');
        var headers = this._setDefaultHeaders(auth);
        var preparedData = this._prepareOpts(data);

        var form = preparedData.formData;
        var requestData = preparedData.requestData;

        if(form){
            var formHeaders = form.getHeaders();
            for (var i in formHeaders) {
                // Prevent duplicate headers, using form values when sending files
                if (i === 'content-type') {
                  headers['Content-Type'] = formHeaders[i];
                  continue;
                }
                if (hasOwn.call(formHeaders, i)) {
                    headers[i] = formHeaders[i];
                }
            }
        }

        if (apiVersion) {
            headers['HelloSign-Version'] = apiVersion;
        }
        makeRequest();
        function makeRequest() {

            var timeout = self._hellosign.getApiField('timeout');
            var isInsecureConnection = self._hellosign.getApiField('protocol') == 'http';
            var host = self._hellosign.getApiField('host');
            var host = path.indexOf('oauth') === -1 ? host : host.replace('api', 'app');
            // Add params for dev environment
            path = self._hellosign.isDev() ? '/apiapp_dev.php' + path : path;
            if(method == "GET"){
                path = path + "?" + requestData;
            }
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

                form.on('error', self._errorHandler(req, callback));
            }
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
            req.setTimeout(timeout, self._timeoutHandler(timeout, req, callback));
            req.on('response', self._responseHandler(req, callback));
            req.on('error', self._errorHandler(req, callback));
            req.on('socket', function(socket) {
                socket.on((isInsecureConnection ? 'connect' : 'secureConnect'), function() {
                    // Send payload; we're safe:
                    if (requestData && requestData != "") {
                      req.write(requestData);
                    }
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
    },

    _setDefaultHeaders: function(auth) {
        var headers = {};

        headers['Authorization'] = this._createAuthHeader(auth);
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/x-www-form-urlencoded';
        headers['User-Agent'] = 'hellosign-nodejs-sdk/' + this._hellosign.getConstant('PACKAGE_VERSION');

        return headers;
    },

    _createAuthHeader: function(methodAuthKey) {

        var token = this._hellosign.getApiField('oauthToken');
        var authField = this._hellosign.getApiField('auth');

        // Method specific auth key overrides others
        if (methodAuthKey){
            return 'Basic ' + Buffer.from(methodAuthKey + ':').toString('base64');
        }

        if (token) {
            return token;
        }

        if (authField) {
            return authField;
        }

    }
};

module.exports = HelloSignResource;
