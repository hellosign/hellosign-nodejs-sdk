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

var expect = require('expect');
var params = require('./testparams');
var hellosign = require('../lib/hellosign');
var path = require('path');

describe('Confirm Test Environment', function(){
	describe('Confirm Params', function(){
		it('should have API Key', function(){
			expect(params.key).to.be.ok();
			expect(params.key).to.not.equal('API_KEY');
		});
		it('should have ClientID', function(){
			expect(params.client_id).to.be.ok();
			expect(params.client_id).to.not.equal('CLIENT_ID');
		});
	});
	describe('Confirm Paths', function(){
		it('should be run from the sdk root', function(){
			var cwd = path.resolve(process.cwd());
			var split = cwd.split('/');
			var last_part = split[split.length-1];

			expect(last_part).to.equal('hellosign-nodejs-sdk');
		})
	});
});
