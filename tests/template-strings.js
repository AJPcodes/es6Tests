var expect = require('chai').expect;

describe('test suite', function(){
  it('true should be true', function () {
    expect(true).to.be.true;
  });
});

describe('template strings', function() {
  it('should be a string', function () {
    var string = `string`;
    expect(string).to.be.a('string');
  });

  it('can evaluate variables', function () {
    var foo = 'bar';
    var string = `foo${foo}`;
    expect(string).to.equal('foobar');
  });
  
  it('can execute functions', function () {
    var string = `The date is: ${new Date()}`;
    var date = new Date();
    expect(string).to.equal('The date is: ' + date);
  });
  
  it('can evaluate expressions', function () {
      var string = `One plus one is: ${1+1}`;
      expect(string).to.equal('One plus one is: 2');
    });

  it('can handle multi-line strings', function () {
      var string = `Line1
Line2`;
      expect(string).to.equal(['Line1', 'Line2'].join('\n'));
    });


});
