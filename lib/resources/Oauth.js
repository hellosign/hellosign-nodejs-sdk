'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'oauth',

    getToken: hellosignMethod({
        path: '/token',
        method: 'POST',
        appRequest: true,
        oauthRequest: true
    }),

    refreshToken: hellosignMethod({
        path: '/token',
        method: 'POST',
        oauthRequest: true
    })

});
