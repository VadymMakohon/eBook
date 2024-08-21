// Attaching properties to a function.

var obj = {};
var fn = function(){};
obj.prop = "some value";
fn.prop = "some value";
assert( obj.prop == fn.prop, "Both are objects, both have the property." );