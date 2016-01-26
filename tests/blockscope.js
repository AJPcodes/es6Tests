//teo tests - use let
var expect = require('chai').expect;

describe('blockscope', function(){

"use strict";

  it('should have block level variabe scoping', function(){
    var i = 10;
    for (let i=0; i<3; i++) {
      let foo = [];
      foo.push(i);
    }
    expect(i).to.equal(10);
  });

  it('should have block level function scoping', function(){

    function fn () {return 'outer'};
    {
        function fn () {return 'inner'};
    }
    expect(fn()).to.equal('outer');
  });
});
