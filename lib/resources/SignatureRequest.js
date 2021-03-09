'use strict';

/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2020 hellosign.com
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

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'signature_request',

    get: hellosignMethod({
        path: '{signatureRequestId}',
        method: 'GET',
        urlParams: ['signatureRequestId']
    }),

    list: hellosignMethod({
        path: '/list',
        method: 'GET'
    }),

    send: hellosignMethod({
        path: '/send',
        method: 'POST',
        prepareSigners: true,
        prepareFiles: true
    }),

    sendWithTemplate: hellosignMethod({
        path: '/send_with_template',
        method: 'POST'
    }),

    bulkSendWithTemplate: hellosignMethod({
        path: '/bulk_send_with_template',
        method: 'POST'
    }),

    remind: hellosignMethod({
        path: '/remind/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

    update: hellosignMethod({
        path: '/update/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

    cancel: hellosignMethod({
        path: '/cancel/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

    removeAccess: hellosignMethod({
        path: '/remove/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

    download: hellosignMethod({
        path: '/files/{signatureRequestId}',
        method: 'GET',
        urlParams: ['signatureRequestId']
    }),

    createEmbedded: hellosignMethod({
        path: '/create_embedded',
        appRequest: true,
        method: 'POST'
    }),

    createEmbeddedWithTemplate: hellosignMethod({
        path: '/create_embedded_with_template',
        appRequest: true,
        method: 'POST'
    }),

    bulkCreateEmbeddedWithTemplate: hellosignMethod({
        path: '/bulk_create_embedded_with_template',
        method: 'POST'
    }),

    releaseHold: hellosignMethod({
        path: '/release_hold/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

});
