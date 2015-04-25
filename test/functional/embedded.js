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
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js')({
	key: params.key,
	client_id: params.client_id,
	client_secret: params.client_secret,
	dev: params.dev || false
});

describe('Embedded', function(){

  describe('Embedded Signing', function(){
  	it('should accept parameters for an embedded signature retrieval', function(){

      var fake_signature_id = '50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b';

  		var results = hellosign.embedded.getSignUrl(fake_signature_id)
                      .catch(function(err){
                        expect(err.message).to.equal('Signature not found');
                      });

  		return results;
  	});
  });

  describe('Embedded Editing', function(){
  	it('should accept parameters for edit url endpoint', function(){
  		var fake_template_id = 'af3cd96b3a1e87043707af07a234b7329f2e0bfe';

  		var result = hellosign.embedded.getEditUrl(fake_template_id)
  						.catch(function(err){
  							expect(err.type).to.equal('not_found');
  						});

  		return result;
  	});
  });

});
