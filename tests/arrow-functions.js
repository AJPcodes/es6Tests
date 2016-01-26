var expect = require('chai').expect;

describe('arrow functions', function () {

  it('is function short-hand', function(){
    var fn = () => {
      return 'Hello World'
    };
    expect(fn()).to.equal('Hello World');
  });
  
  it('one parameter can be written w-o paren', function(){
    var fn = x => {return `Hello ${x}`};
    expect(fn('Allen')).to.equal('Hello Allen');
  });
 
   it('binds this to the function', function(){
    this.testVar = 'test!'
    var fn = () => {return this.testVar};
    expect(fn()).to.equal('test!');
  });
});
