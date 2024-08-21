// A look at how the location of function definition doesn't matter.

var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
assert( isNimble() && canFly() && isDeadly(), "Still works, even though isNimble is moved." );
function isNimble(){ return true; }