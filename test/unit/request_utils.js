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

var expect = require('expect.js');
var params = { key :'FAKE_API_KEY'};
var hellosign = require('../../lib/hellosign.js')(params);
var path = require('path');

describe('Request Utils', function(){

	describe('_setDefaultHeaders', function(){

		var headers;

		beforeEach(function(){
			headers = hellosign.account._setDefaultHeaders();
		});

		it('should set all header types', function(){

			var defaultHeaders = [ 'Authorization', 'Accept', 'Content-Type', 'User-Agent' ];
			var headerNames = Object.keys(headers);

			for (var i = 0; i < defaultHeaders.length; i++) {
				var contained = false;
				for (var j = 0; j < headerNames.length; j++) {
					if (headerNames[j] === defaultHeaders[i]) {
						contained = true;
					}
				}
				expect(contained).to.be.ok();
			}
		});

		it('should set all headers as strings', function() {

			for (header in headers) {
				expect(headers[header]).to.be.a('string');
			}

		});
	});

	describe('_createAuthHeader', function(){

		it('should set basic auth header for API key', function(){
			var header = hellosign.account._createAuthHeader();
			var authtype = header.split(' ')[0];
			var headerAPIKey = header.split(' ')[1];
			expect(authtype).to.equal('Basic');
			expect(headerAPIKey).to.equal(Buffer.from(params.key + ':').toString('base64'));
		});

		it('should set oath key auth header for oauth token instantiation', function(){
			var testToken = 'YWY0ZTkxMDRjNmNiMzMzZjEyZmMzZmQyMmQ0MWQ4NzAyZDIxMzU5NTYzNTFhNGIwOTE0Mzc0NTFmNDM3YmE2NjdlYzVlOGYw';
			var hellosignOauth = require('../../lib/hellosign.js')({oauthToken: testToken });

			var header = hellosignOauth.account._createAuthHeader();
			var authtype = header.split(' ')[0];
			var headerToken = header.split(' ')[1];
			expect(authtype).to.equal('Bearer');
			expect(headerToken).to.equal(testToken);
		});

		it('should set username/password key for basic auth instantiation', function(){
			var testUser = {username: 'hodor', password: 'stark'};
			var hellosignBasic = require('../../lib/hellosign.js')(testUser);
			var header = hellosignBasic.account._createAuthHeader();
			var authtype = header.split(' ')[0];
			var headerAuthString = header.split(' ')[1];
			expect(authtype).to.equal('Basic');
			expect(headerAuthString).to.equal(Buffer.from(testUser.username + ':' + testUser.password).toString('base64'));
		});
	});
});
