var expect = require('expect.js');
var params = require('../testparams.js');
var hellosign = require('../../lib/hellosign.js');

describe('Folder', function(){
  describe('Traversal', function(){
    it('should traverse folders', function(){
      expect(-1).to.equal([1,2,3].indexOf(5));
      // assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});
