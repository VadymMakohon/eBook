// Types of function definition that can't be placed anywhere.

assert( typeof canFly == "undefined", "canFly doesn't get that benefit." );
assert( typeof isDeadly == "undefined", "Nor does isDeadly." );
var canFly = function(){ return true; };
window.isDeadly = function(){ return true; };