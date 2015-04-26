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

var path = require('path');
var utils = require('./utils');
var OPTIONAL_REGEX = /^optional!/;

/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. "charges" or "customers")
 * @param [spec.required=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceeding the also-optional callback argument
 */
module.exports = function hellosignMethod(spec) {

    var commandPath = typeof spec.path == 'function' ? spec.path
        : utils.makeURLInterpolator( spec.path || '' );
    var requestMethod = (spec.method || 'GET').toUpperCase();
    var urlParams = spec.urlParams || [];

    return function() {

        var self = this;
        var args = [].slice.call(arguments);

        var callback = typeof args[args.length - 1] == 'function' && args.pop();
        var auth = args.length > urlParams.length && utils.isAuthKey(args[args.length - 1]) ? args.pop() : null;
        var data = utils.isObject(args[args.length - 1]) ? args.pop() : {};
        var urlData = this.createUrlData();
        if('appRequest' in spec && spec['appRequest'] == true){
            data['client_id'] = this._hellosign.getApiField('clientId');
        }
        if('oauthRequest' in spec && spec['oauthRequest'] == true){
            if(!this._hellosign.getApiField('clientId')){
                throw new Error('Oauth request requires client_id param');
            }
            data['client_id'] = this._hellosign.getApiField('clientId');
            // Client Secret is only required for OAuth requests
            if (this._hellosign.getApiField('clientSecret')){
                data['client_secret'] = this._hellosign.getApiField('clientSecret');
            }
        }
        var deferred = this.createDeferred(callback);

        for (var i = 0, l = urlParams.length; i < l; ++i) {

            var arg = args[0];
            var param = urlParams[i];

            var isOptional = OPTIONAL_REGEX.test(param);
            param = param.replace(OPTIONAL_REGEX, '');

            if (!arg) {
                if (isOptional) {
                    urlData[param] = '';
                    continue;
                }
                throw new Error('HelloSign: I require argument "' + urlParams[i] + '", but I got: ' + arg);
            }
            urlData[param] = args.shift();
        }

        if (args.length) {
            throw new Error(
                    'HelloSign: Unknown arguments (' + args + '). Did you mean to pass an options object? ' +
                    'See https://github.com/hellosign/hellosign-node/wiki/Passing-Options.'
            );
        }
        var oauthRequest = 'oauthRequest' in spec && spec['oauthRequest'] === true ? true : false;
        if(oauthRequest === true){
            if('refresh_token' in data){
                data['grant_type'] = 'refresh_token';
            } else {
                data['grant_type'] = 'authorization_code';
            }
        }
        var requestPath = this.createFullPath(commandPath, urlData, oauthRequest);

        self._request(requestMethod, requestPath, data, auth, function(err, response) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(
                    spec.transformResponseData ?
                        spec.transformResponseData(response) :
                        response
                );
            }
        });

        return deferred.promise;

    };
};
