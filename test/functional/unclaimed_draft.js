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

describe('Unclaimed Draft', function(){

  describe('Normal unclaimed drafts', function(){
    it('should create an unclaimed draft', function(){
        var results = hellosign.unclaimedDraft.create({
	        			test_mode : 1,
	        			files : ['test/functional/docs/nda.pdf', 'test/functional/docs/nda-text-tags.pdf']
	    				})
	    				.then(function(res){
	    					expect(res.unclaimed_draft.claim_url).to.be.ok();
	    				});
	    return results;
    });
  });

  describe('Embedded Unclaimed Drafts', function(){

  	it('should create embedded unclaimed drafts', function(){
  		var options = {
	        test_mode : 1,
	        clientId : params.client_id,
	        type : 'request_signature',
	        subject : 'The NDA we talked about',
	        requester_email_address : 'jack@hellosign.com',
	        files : ['test/functional/docs/nda.pdf'],
	        is_for_embedded_signing : 1
	    };

  		var results = hellosign.unclaimedDraft.createEmbedded(options)
  						.then(function(res){
  							expect(res.unclaimed_draft.claim_url).to.be.ok();
  						});
  		return results;
  	});

  	it('should create embedded unclaimed drafts with a template', function(){

  		var options = {
  			test_mode: 1,
  			template_id: 'TO_BE_POPULATED_ON_PROMISE_RESOLUTION',
  			title: 'embedded draft test',
  			subject: 'embedded draft test',
  			message: 'embedded draft test',
  			signing_redirect_url: 'http://bondstreet.co.uk',
  			requesting_redirect_url: 'http://met.police.uk',

  			signers: [
  				{
  					name: 'Sherlock',
  					role: 'Signer',
  					email_address: 'sherlock@holmesdetective.co.uk',
  					pin: 3645
  				},{
  					name: 'Watson',
  					role: 'Assistant',
  					email_address: 'watson@holmesdetective.co.uk',
  					pin: 4657
  				}
  			],
  			requester_email_address: 'mrshudson@landlady.com',
  			metadata: {
  				clue1: 'pink suitcase',
  				clue2: 'rache...'
  			}
  		};

  		var results = hellosign.template.list()
  						.then(function(res){
  							options.template_id = res.templates[0].template_id;
  							return hellosign.unclaimedDraft.createEmbeddedWithTemplate(options);
  						})
  						.then(function(res){
  							expect(res.unclaimed_draft.claim_url).to.be.ok();
  						});

  		return results;
  	});
  });

});
