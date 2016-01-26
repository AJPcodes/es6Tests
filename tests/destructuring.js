//two tests - one for arrays and one for objects
////may need to use -- --harmony_destructuring

var expect = require('chai').expect;

describe('destructuting', function(){
  
  it('should allow array literal syntax for variable assignment', function(){
    var [a,b]=["A","B"];

    expect(a).to.equal("A");
  
  });
 
  it('should allow object literal syntax for variable assignment', function(){
    var {a,b} ={a: "A", b: "B"};

    expect(a).to.equal("A");
  
  });


});
