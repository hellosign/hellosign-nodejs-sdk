var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js')({
	key: params.key,
	client_id: params.client_id,
	client_secret: params.client_secret,
	dev: params.dev || false
});
var path = require('path')

describe('Templates', function(){
  
  describe('List', function(){
    it('should list available templates', function(){
    	var templates = hellosign.template.list();
    	templates.then(function(data){
	      	expect(Array.isArray(templates)).to.be.ok();
	      	expect(templates.length).to.be.greaterThan(1);
    	});
    	return templates;
    });
  });
  
  describe('Get', function(){
  	it('should get a template back from the server', function(){
  		var results = hellosign.template.list()
  			.then(function(templates){
  				var template_id = templates.templates[0].template_id;
  				return template_id;
  			})
  			.then(function(id){
  				var getResult = hellosign.template.get(id);
  				return getResult;
  			}).then(function(res){
  				expect(res).to.be.ok();
  				expect(res.template.template_id).to.be.ok();
  			});
  		return results;
  	});
  });

  describe('Embedded Templates', function(){
  	it('should create an embedded template draft', function(){
  		var options = {
  			test_mode: 1,
  			files: ['test/functional/docs/nda.pdf'],
  			title: 'embedded draft test',
  			subject: 'embedded draft test',
  			message: 'embedded draft test',
  			signer_roles: [
  				{
  					name: 'Sherlock',
  					order: 0
  				},{
  					name: 'Watson',
  					order: 1
  				}
  			],
  			cc_roles: ['commissioner@metropolice.gov.uk']
  		};

  		var results = hellosign.template.createEmbeddedDraft(options)
  						.then(function(res){
  							expect(res.template.template_id).to.be.ok();
  						});
  		return results;
  	});
  });

});
