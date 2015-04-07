var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js');

describe('Confirm Test Environment', function(){
	describe('Confirm Params', function(){
		it('should have API Key', function(){
			expect(params.api_key).to.be.ok();
			expect(params.api_key).to.not.equal('API_KEY');
		});
		it('should have ClientID', function(){
			expect(params.client_id).to.be.ok();
			expect(params.client_id).to.not.equal('CLIENT_ID');
		});
	});
});

describe('Folder', function(){
  describe('Traversal', function(){
    it('should traverse folders', function(){
      expect(-1).to.equal([1,2,3].indexOf(5));
      // assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});
