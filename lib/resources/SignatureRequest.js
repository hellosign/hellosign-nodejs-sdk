'use strict';

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

    remind: hellosignMethod({
        path: '/remind/{signatureRequestId}',
        method: 'POST',
        urlParams: ['signatureRequestId']
    }),

    cancel: hellosignMethod({
        path: '/cancel/{signatureRequestId}',
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
    })

});
