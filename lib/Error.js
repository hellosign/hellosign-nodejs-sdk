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

var utils = require('./utils');

module.exports = _Error;

/**
 * Generic Error klass to wrap any errors returned by HelloSign-node
 */
function _Error(raw) {
    this.populate.apply(this, arguments);
    this.stack = (new Error(this.message)).stack;
}

// Extend Native Error
_Error.prototype = Object.create(Error.prototype);

_Error.prototype.type = 'GenericError';
_Error.prototype.populate = function(type, message) {
    this.type = type;
    this.message = message;
};

_Error.extend = utils.protoExtend;

/**
 * Create subclass of internal Error klass
 * (Specifically for errors returned from HelloSign's REST API)
 */
var HelloSignError = _Error.HelloSignError = _Error.extend({
    type: 'HelloSignError',
    populate: function(raw) {

        // Move from prototype def (so it appears in stringified obj)
        this.type = this.type;

        this.stack = (new Error(raw.message)).stack;
        this.rawType = raw.type;
        this.code = raw.code;
        this.param = raw.param;
        this.message = raw.message;
        this.detail = raw.detail;
        this.raw = raw;

    }
});

// Alias for connection errors
_Error.HelloSignConnectionError = _Error.HelloSignError;

/**
 * Helper factory which takes raw HelloSign errors and outputs wrapping instances
 */
HelloSignError.generate = function(rawHelloSignError) {
    return new _Error(rawHelloSignError.error_name, rawHelloSignError.error_msg);
};
