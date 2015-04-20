var expect = require('expect.js');

var hellosign = require('../../lib/hellosign.js')({});

describe('Function Endpoints', function(){
  describe('Account', function(){
    it('should have account endpoint functions', function(){
      expect(hellosign.account.get).to.be.a('function');
      expect(hellosign.account.create).to.be.a('function');
      expect(hellosign.account.update).to.be.a('function');
      expect(hellosign.account.verify).to.be.a('function');
    });
  });
  describe('Embedded', function(){
    it('should have embedded endpoint functions', function(){
      expect(hellosign.embedded.getSignUrl).to.be.a('function');
      expect(hellosign.embedded.getEditUrl).to.be.a('function');
    });
  });
  describe('OAuth', function(){
    it('should have oauth endpoint functions', function(){
      expect(hellosign.oauth.getToken).to.be.a('function');
      expect(hellosign.oauth.refreshToken).to.be.a('function');
    });
  });
  describe('Signature Request', function(){
    it('should have signature request endpoint functions', function(){
      expect(hellosign.signatureRequest.get).to.be.a('function');
      expect(hellosign.signatureRequest.list).to.be.a('function');
      expect(hellosign.signatureRequest.send).to.be.a('function');
      expect(hellosign.signatureRequest.sendWithTemplate).to.be.a('function');
      expect(hellosign.signatureRequest.remind).to.be.a('function');
      expect(hellosign.signatureRequest.cancel).to.be.a('function');
      expect(hellosign.signatureRequest.download).to.be.a('function');
      expect(hellosign.signatureRequest.createEmbedded).to.be.a('function');
      expect(hellosign.signatureRequest.createEmbeddedWithTemplate).to.be.a('function');

    });
  });
  describe('Team', function(){
    it('should have team endpoint functions', function(){
      expect(hellosign.team.get).to.be.a('function');
      expect(hellosign.team.create).to.be.a('function');
      expect(hellosign.team.update).to.be.a('function');
      expect(hellosign.team.destroy).to.be.a('function');
      expect(hellosign.team.addMember).to.be.a('function');
      expect(hellosign.team.removeMember).to.be.a('function');
    });
  });
  describe('Template', function(){
    it('should have template endpoint functions', function(){
      expect(hellosign.template.get).to.be.a('function');
      expect(hellosign.template.list).to.be.a('function');
      expect(hellosign.template.delete).to.be.a('function');
      expect(hellosign.template.addUser).to.be.a('function');
      expect(hellosign.template.removeUser).to.be.a('function');
      expect(hellosign.template.createEmbeddedDraft).to.be.a('function');
    });
  });
  describe('Unclaimed Draft', function(){
    it('should have unclaimed draft endpoint functions', function(){
      expect(hellosign.unclaimedDraft.create).to.be.a('function');
      expect(hellosign.unclaimedDraft.createEmbedded).to.be.a('function');
      expect(hellosign.unclaimedDraft.createEmbeddedWithTemplate).to.be.a('function');
    });
  });
});