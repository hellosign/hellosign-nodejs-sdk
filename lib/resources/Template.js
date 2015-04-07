'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'template',

    get: hellosignMethod({
        path: '{templateId}',
        method: 'GET',
        urlParams: ['templateId']
    }),

    list: hellosignMethod({
        path: '/list',
        method: 'GET'
    }),

    delete: hellosignMethod({
        path: '/delete',
        urlParams: ['templateId'],
        method: 'POST'
    }),

    addUser: hellosignMethod({
        path: '/add_user/{templateId}',
        urlParams: ['templateId'],
        method: 'POST'
    }),
    removeUser: hellosignMethod({
        path: '/remove_user/{templateId}',
        urlParams: ['templateId'],
        method: 'POST'
    }),

    createEmbeddedDraft: hellosignMethod({
        path: '/create_embedded_draft',
        method: 'POST',
        appRequest: true
    })

});
