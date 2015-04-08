var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js')({
	key: params.key,
	client_id: params.client_id,
	client_secret: params.client_secret,
	dev: params.dev || false
});

describe('Account', function(){

  describe('Creating, getting, updating, and verification', function(){

    var email = "node-sdk-test" + new Date().toISOString() + "@example.com";
    var pwd = "somepassword";

    it('should create an account', function(){
      var options = {
        email_address: email,
        password: pwd
      };

      var result = hellosign.account.create(options)
                      .then(function(res){
                        expect(res.account).to.be.ok();
                      })
      return result;
    });

    it('should verify an account', function(){
      var result = hellosign.account.verify({email_address: email})
                      .then(function(res){
                        expect(res.account).to.be.ok();
                      });
      return result;
    });

    it('should get the current account', function(){
      var result = hellosign.account.get()
                    .then(function(res){
                      expect(res.account).to.be.ok();
                    });
      return result;
    });

    it('should update an account', function(){
      var new_callback_url = 'http://www.example.com/mycallback'
      var result = hellosign.account.update({callback_url: new_callback_url})
                    .then(function(res){
                      expect(res.account).to.be.ok();
                    });
      return result;
    });

  });

});
