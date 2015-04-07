'use strict';

HelloSign.DEFAULT_HOST = 'api.hellosign.com';
HelloSign.DEFAULT_PORT = '443';
HelloSign.DEFAULT_BASE_PATH = '/v3/';
HelloSign.DEFAULT_API_VERSION = null;

// Use node's default timeout:
HelloSign.DEFAULT_TIMEOUT = require('http').createServer().timeout;

HelloSign.PACKAGE_VERSION = require('../package.json').version;

HelloSign.USER_AGENT = {
    bindings_version: HelloSign.PACKAGE_VERSION,
    lang: 'node',
    lang_version: process.version,
    platform: process.platform,
    publisher: 'hellosign',
    uname: null
};

HelloSign.USER_AGENT_SERIALIZED = null;

var exec = require('child_process').exec;

var resources = {
    Account: require('./resources/Account'),
    SignatureRequest: require('./resources/SignatureRequest'),
    Embedded: require('./resources/Embedded'),
    Team: require('./resources/Team'),
    Template: require('./resources/Template'),
    UnclaimedDraft: require('./resources/UnclaimedDraft'),
    Oauth: require('./resources/Oauth')
};

HelloSign.HelloSignResource = require('./HelloSignResource');
HelloSign.resources = resources;

function HelloSign(params) {

    var key = 'key' in params ? params.key : null;
    var username = 'username' in params ? params.username : null;
    var password = 'password' in params ? params.password : null;
    var clientId = 'client_id' in params ? params.client_id : null;
    var clientSecret = 'client_secret' in params ? params.client_secret : null;
    var oauthToken = 'oauthToken' in params ? params.oauthToken : null;
    var dev = 'dev' in params ? params.dev : false;

    if (!(this instanceof HelloSign)) {
        return new HelloSign(params);
    }

    HelloSign.API_DEV_URL = "www.my.hellosign.com";

    this._api = {
        auth: null,
        host: dev == false ? HelloSign.DEFAULT_HOST : HelloSign.API_DEV_URL,
        port: HelloSign.DEFAULT_PORT,
        basePath: HelloSign.DEFAULT_BASE_PATH,
        timeout: HelloSign.DEFAULT_TIMEOUT,
        dev: dev
    };

    this._prepResources();
    if(key !== null){
        this.setApiKey(key);
    } else if(username !== null && password !== null){
        this.setUserPassAuth(username, password);
    }

    this.setClientId(clientId);
    this.setClientSecret(clientSecret);
}

HelloSign.prototype = {

    setHost: function(host, port, protocol) {
        this._setApiField('host', host);
        if (port) this.setPort(port);
        if (protocol) this.setProtocol(protocol);
    },

    setProtocol: function(protocol) {
        this._setApiField('protocol', protocol.toLowerCase());
    },

    setPort: function(port) {
        this._setApiField('port', port);
    },

    setClientId: function(clientId) {
        if (clientId) {
            this._setApiField('clientId', clientId);
        }
    },

    setClientSecret: function(clientSecret) {
        if (clientSecret) {
            this._setApiField('clientSecret', clientSecret);
        }
    },

    setApiKey: function(key) {
        if (key) {
            this._setApiField(
                'auth',
                    'Basic ' + new Buffer(key + ':').toString('base64')
            );
        }
    },

    setUserPassAuth: function(username, password) {
        if (username && password) {
            this._setApiField(
                'auth',
                    'Basic ' + new Buffer(username + ':' + password).toString('base64')
            );
        }
    },

    setTimeout: function(timeout) {
        this._setApiField(
            'timeout',
                timeout == null ? HelloSign.DEFAULT_TIMEOUT : timeout
        );
    },

    _setApiField: function(key, value) {
        this._api[key] = value;
    },

    getApiField: function(key) {
        return this._api[key];
    },

    getConstant: function(c) {
        return HelloSign[c];
    },

    getClientUserAgent: function(cb) {
        if (HelloSign.USER_AGENT_SERIALIZED) {
            return cb(HelloSign.USER_AGENT_SERIALIZED);
        }
        exec('uname -a', function(err, uname) {
            HelloSign.USER_AGENT.uname = uname || 'UNKNOWN';
            HelloSign.USER_AGENT_SERIALIZED = JSON.stringify(HelloSign.USER_AGENT);
            cb(HelloSign.USER_AGENT_SERIALIZED);
        });
    },

    _prepResources: function() {

        for (var name in resources) {
            this[
                name[0].toLowerCase() + name.substring(1)
                ] = new resources[name](this);
        }

    },

    isDev: function() {
        return this._api['dev'];
    }

};

module.exports = HelloSign;
