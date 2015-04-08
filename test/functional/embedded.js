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