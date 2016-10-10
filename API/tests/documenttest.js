var chai = require('char');
var expect = chai.expect;
var Document = require('../controller/document');

describe('CreateDocument', function() {
  if('getSubTotal() should return 0 if no items are passed in', function() {
    var document = new Document([]);
    expect(document.name)to.equal("Julyan");
  });
});
