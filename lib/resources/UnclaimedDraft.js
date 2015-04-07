'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'unclaimed_draft',

    create: hellosignMethod({
        path: '/create',
        method: 'POST'
    }),
    createEmbedded: hellosignMethod({
        path: '/create_embedded',
        method: 'POST',
        appRequest: true
    }),
    createEmbeddedWithTemplate: hellosignMethod({
        path: '/create_embedded_with_template',
        method: 'POST',
        appRequest: true
    })

});
