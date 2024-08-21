// Extending an object with both a prototyped method and a method within the constructor function.

function Ninja(){
  this.swung = false;
  
  // Should return true
  this.swingSword = function(){
    return !this.swung;
  };
}

// Should return false, but will be overridden
Ninja.prototype.swingSword = function(){
  return this.swung;
};

var ninja = new Ninja();
assert( ninja.swingSword(), "Calling the instance method, not the prototype method." );