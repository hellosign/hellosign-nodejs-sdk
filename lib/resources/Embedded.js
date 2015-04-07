'use strict';

var HelloSignResource = require('../HelloSignResource');
var hellosignMethod = HelloSignResource.method;

module.exports = HelloSignResource.extend({
    path: 'embedded',

    getSignUrl: hellosignMethod({
        path: '/sign_url/{signatureId}',
        method: 'GET',
        urlParams: ['signatureId']
    }),

    getEditUrl: hellosignMethod({
    	path: '/edit_url/{templateId}',
    	method: 'GET',
    	urlParams: ['templateId']
    })

});
