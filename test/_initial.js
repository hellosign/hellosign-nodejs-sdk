var expect = require('expect.js');
var params = require('./testparams.js');
var hellosign = require('../lib/hellosign.js');
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