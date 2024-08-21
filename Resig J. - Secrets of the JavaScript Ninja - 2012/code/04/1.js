// Creating an instance of an function that has a prototyped method.

function Ninja(){}

Ninja.prototype.swingSword = function(){
  return true;
};

var ninja1 = Ninja();
assert( ninja1 === undefined, "Is undefined, not an instance of Ninja." );

var ninja2 = new Ninja();
assert( ninja2.swingSword(), "Method exists and is callable." );