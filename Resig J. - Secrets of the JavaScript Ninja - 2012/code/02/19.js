// Modifying the context of a function, when call.

var object = {};
function fn(){
  return this;
}

assert( fn() == this, "The context is the global object." );
assert( fn.call(object) == object, "The context is changed to a specific object." );