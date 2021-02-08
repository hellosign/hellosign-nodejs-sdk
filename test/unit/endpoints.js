/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2020 hellosign.com
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
  describe('Bulk Send', function(){
    it('should have bulk send endpoint functions', function(){
      expect(hellosign.bulkSendJob.get).to.be.a('function');
      expect(hellosign.bulkSendJob.list).to.be.a('function');
    });
  });
  describe('Embedded', function(){
    it('should have embedded endpoint functions', function(){
      expect(hellosign.embedded.getSignUrl).to.be.a('function');
      expect(hellosign.embedded.getEditUrl).to.be.a('function');
      expect(hellosign.embedded.postEditUrl).to.be.a('function');
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
      expect(hellosign.signatureRequest.removeAccess).to.be.a('function');
      expect(hellosign.signatureRequest.download).to.be.a('function');
      expect(hellosign.signatureRequest.createEmbedded).to.be.a('function');
      expect(hellosign.signatureRequest.createEmbeddedWithTemplate).to.be.a('function');
      expect(hellosign.signatureRequest.bulkCreateEmbeddedWithTemplate).to.be.a('function');
      expect(hellosign.signatureRequest.releaseHold).to.be.a('function');

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
      expect(hellosign.template.updatefiles).to.be.a('function');
    });
  });
  describe('Unclaimed Draft', function(){
    it('should have unclaimed draft endpoint functions', function(){
      expect(hellosign.unclaimedDraft.create).to.be.a('function');
      expect(hellosign.unclaimedDraft.createEmbedded).to.be.a('function');
      expect(hellosign.unclaimedDraft.createEmbeddedWithTemplate).to.be.a('function');
      expect(hellosign.unclaimedDraft.editAndResend).to.be.a('function');
    });
  });
  describe('Reports', function(){
    it('should have reports endpoint functions', function(){
      expect(hellosign.reports.get).to.be.a('function');
    });
  });
});
