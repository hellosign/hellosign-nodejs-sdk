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
var HelloSignError = require('../../lib/Error.js');
var utils = require('../../lib/utils.js');

describe('Error and utility testing', function(){

	describe('Error class', function(){
		it('should return an HelloSignError error object', function(){
			var myError = new HelloSignError('HelloSignError');
			expect(myError.populate).to.be.a('function');
			expect(myError.type).to.equal('HelloSignError');
		});
		it('should populate error type and message', function(){
			var myError = new HelloSignError();
			myError.populate('HelloSignError', 'message');
			expect(myError.type).to.equal("HelloSignError");
			expect(myError.message).to.equal("message");
		});
		it('should = error types HelloSignError and HelloSignConnectionError', function(){
			expect(HelloSignError.HelloSignError).to.equal(HelloSignError.HelloSignConnectionError);
		})
	});

	describe('Utility functions', function(){
		it('should recognize auth keys', function(){
			var key = 'fx_abcdefghjiklmnopqrstuvwxyz012345';
			expect(utils.isAuthKey(123455)).to.not.be.ok();
			expect(utils.isAuthKey('randomajklfhualkj')).to.not.be.ok();
			expect(utils.isAuthKey(key)).to.be.ok();
		});
		it('should match objects', function(){
			var myObj = {name: 'herman', job: 'mage'};
			expect(utils.isObject(myObj)).to.be.ok();
		});
		it('should stringify request data', function(){
			var myData = {
				some: 'thing',
				is: 'awesome'
			}
			var output = utils.stringifyRequestData(myData);
			expect(output).to.be.a('string');
			expect(output).to.equal('some=thing&is=awesome');
		});
		it('should create url interpolators', function(){
			var expectedResult = 'my/url/derp/derp2';
			var interpolator = utils.makeURLInterpolator('my/url/{myParam}/{myOtherParam}');
			var output = interpolator({myParam: 'derp', myOtherParam: 'derp2'});
			expect(output).to.equal(expectedResult);
		});
		it('should extend prototypes', function(){
			function myClass1(){
				this.prop1 = 'meow';
				this.prop2 = 'mew';
			}
			myClass1.extend = utils.protoExtend;
			var myClass2 = myClass1.extend({});
			var myInstance = new myClass2();
			expect(myInstance.hasOwnProperty('prop1')).to.be.ok();
		});
	});
});
