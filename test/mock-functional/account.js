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
var spec = require('../hellosign-sdk-test-server/lib/v3.spec').tests;
var params = require('../testparams.example.js');

var hellosign = require('../../lib/hellosign')({
		key: params.key,
		client_id: params.client_id,
		client_secret: params.client_secret,
		dev: false
		});

hellosign.setHost('localhost', 8080, 'http');

describe('Account', function(){

  describe('Creating, getting, updating, and verification', function(){

    var email = "node-sdk-test" + new Date().toISOString() + "@example.com";

    it('should create an account', function(done){

			var test = spec[2];

      var result = hellosign.account.create(test['body'])
                      .then(function(res){
                        expect(res.account).to.be.ok();
												done();
                      })
      return result;
    });

    it('should verify an account', function(done){

			var test = spec[4];

      var result = hellosign.account.verify(test.body)
                      .then(function(res){
                        expect(res.account).to.be.ok();
												done();
                      });
      return result;
    });

    it('should get the current account', function(done){

			var test = spec[0];

      var result = hellosign.account.get()
                    .then(function(res){
                      expect(res.account).to.be.ok();
											done();
                    });
      return result;
    });

    it('should update an account', function(done){

			var test = spec[1];

      var result = hellosign.account.update(test.body)
                    .then(function(res){
                      expect(res.account).to.be.ok();
											done();
                    });
      return result;
    });

  });

});
