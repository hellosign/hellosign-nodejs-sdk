var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js')({
	key: params.key,
	client_id: params.client_id,
	client_secret: params.client_secret,
	dev: params.dev || false
});

describe('Embedded', function(){
  
  // describe('Normal unclaimed drafts', function(){
  //   it('should create an unclaimed draft', function(){
  //       var results = hellosign.unclaimedDraft.create({
	 //        			test_mode : 1,
	 //        			files : ['test/functional/docs/nda.pdf', 'test/functional/docs/nda-text-tags.pdf']
	 //    				})
	 //    				.then(function(res){
	 //    					expect(res.unclaimed_draft.claim_url).to.be.ok();
	 //    				});
	 //    return results;
  //   });
  // });

  describe('Embedded Signing', function(){
  	xit('should be able to create an embedded signature request', function(){
  		
  		var options = {
  			test_mode: 1,
	  		files: ['test/functional/docs/nda.pdf'],
	  		signers: [{"name": "Signer Name", "email_address": "signer@example.com"}],
	  		cc_email_addresses: ["receiver@example.com"],
	  		subject: "Test embedded signature request",
	  		message: "This is the message"
  		}

  		var results = hellosign.embedded.sign_url();

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