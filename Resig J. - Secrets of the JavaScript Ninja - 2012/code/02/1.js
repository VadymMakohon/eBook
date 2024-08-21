// Three different ways to define a function.

function isNimble(){ return true; }
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };
assert( isNimble() && canFly() && isDeadly(), "All are functions, all return true" );