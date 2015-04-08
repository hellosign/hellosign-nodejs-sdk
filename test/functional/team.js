var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js')({
	key: params.key,
	client_id: params.client_id,
	client_secret: params.client_secret,
	dev: params.dev || false
});

describe('Team', function(){
  
  describe('Creation and editing', function(){
    
    var team_name = 'The A-Team (SDK Test)';
    
    it('should create a team', function(){
      var result = hellosign.team.create({name: team_name})
                    .then(function(res){
                      expect(res.team.name).to.equal(team_name);
                    });
      return result;
    });

    it('should get team', function(){
      var result = hellosign.team.get()
                    .then(function(res){
                      expect(res.team.name).to.equal(team_name);
                    });
    	return result;
    });

    it('should update team name', function(){
      var newName = 'The Mr. T Team';
      var result = hellosign.team.update({name: newName})
                      .then(function(res){
                        expect(res.team.name).to.equal(newName);
                      });
      return result;
    });
  });

  describe('Adding/Removing members', function(){
    
    var memberEmail = 'node_sdk_test_member@example.net';
    
    it('should add a member', function(){
      var result = hellosign.team.addMember({email_address: memberEmail})
                      .then(function(res){
                        expect(res.team.accounts).to.be.ok();
                      });
      return result;
    });

    it('should be able to add team members to a template', function(){
      var result = hellosign.template.list()
                    .then(function(res){
                      return hellosign.template.addUser(
                        res.templates[0].template_id,
                        {
                          email_address: memberEmail
                        }
                      );
                    })
                    .then(function(res){
                      expect(res.template).to.be.ok();
                    });
      return result;
    });

    it('should be able to remove team members from a template', function(){
      var result = hellosign.template.list()
                    .then(function(res){
                      return hellosign.template.removeUser(
                        res.templates[0].template_id,
                        {
                          email_address: memberEmail
                        }
                      );
                    })
                    .then(function(res){
                      expect(res.template).to.be.ok();
                    });
      return result;
    });

    it('should remove a member', function(){
      var result = hellosign.team.removeMember({email_address: memberEmail})
                    .then(function(res){
                      expect(res.team.accounts).to.be.ok();
                    });
      return result;
    });

  });

  describe('Deletion', function(){
    it('should delete a team', function(){
      // No return - should simply run without error
      hellosign.team.destroy()
    });
  });

});