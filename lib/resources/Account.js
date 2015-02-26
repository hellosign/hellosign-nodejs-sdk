'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'account',

    get: hellosignMethod({
        method: 'GET'
    }),

    update: hellosignMethod({
        method: 'POST'
    }),

    create: hellosignMethod({
        path: '/create',
        method: 'POST'
    }),

    verify: hellosignMethod({
        path: '/verify',
        method: 'POST'
    })

});
