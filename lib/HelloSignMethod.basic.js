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

var hellosignMethod = require('./HelloSignMethod');
var utils = require('./utils');

module.exports = {

    create: hellosignMethod({
        method: 'POST'
    }),

    list: hellosignMethod({
        method: 'GET'
    }),

    retrieve: hellosignMethod({
        method: 'GET',
        path: '/{id}',
        urlParams: ['id']
    }),

    update: hellosignMethod({
        method: 'POST',
        path: '{id}',
        urlParams: ['id']
    }),

    // Avoid 'delete' keyword in JS
    del: hellosignMethod({
        method: 'DELETE',
        path: '{id}',
        urlParams: ['id']
    }),

    setMetadata: function(id, key, value, auth, cb) {

        var self = this;
        var data = key;
        var isObject = utils.isObject(key);
        // We assume null for an empty object
        var isNull = data === null || (isObject && !Object.keys(data).length);

        // Allow optional passing of auth & cb:
        if ((isNull || isObject) && typeof value == 'string') auth = value;
        else if (typeof auth != 'string') {
            if (!cb && typeof auth == 'function') {
                cb = auth;
            }
            auth = null;
        }

        var urlData = this.createUrlData();
        var deferred = this.createDeferred(cb);
        var path = this.createFullPath('/' + id, urlData);

        if (isNull) {
            // Reset metadata:
            sendMetadata(null, auth);
        } else if (!isObject) {
            // Set individual metadata property:
            var metadata = {};
            metadata[key] = value;
            sendMetadata(metadata, auth);
        } else {
            // Set entire metadata object after resetting it:
            this._request('POST', path, {
                metadata: null
            }, auth, function(err, response) {
                if (err) return deferred.reject(err);
                sendMetadata(data, auth);
            });
        }

        function sendMetadata(metadata, auth) {
            self._request('POST', path, {
                metadata: metadata
            }, auth, function(err, response) {
                if (err) deferred.reject(err);
                else deferred.resolve(response.metadata);
            });
        }

        return deferred.promise;

    },

    getMetadata: function(id, auth, cb) {

        if (!cb && typeof auth == 'function') {
            cb = auth;
            auth = null;
        }

        var urlData = this.createUrlData();
        var deferred = this.createDeferred(cb);
        var path = this.createFullPath('/' + id, urlData);

        this._request('GET', path, {}, auth, function(err, response) {
            if (err) deferred.reject(err);
            else deferred.resolve(
                response.metadata
            );
        });

        return deferred.promise;

    }

};
