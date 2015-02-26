'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'team',

    get: hellosignMethod({
        method: 'GET'
    }),

    create: hellosignMethod({
        path: '/create',
        method: 'POST'
    }),

    update: hellosignMethod({
        method: 'POST'
    }),

    destroy: hellosignMethod({
        path: '/destroy',
        method: 'POST'
    }),

    addMember: hellosignMethod({
        path: '/add_member',
        method: 'POST'
    }),

    removeMember: hellosignMethod({
        path: '/remove_member',
        method: 'POST'
    })

});
