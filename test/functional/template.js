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
