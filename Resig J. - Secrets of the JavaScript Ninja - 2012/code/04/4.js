// Examining the type of an instance and its constructor.

function Ninja(){}

var ninja = new Ninja();

assert( typeof ninja == "object", "However the type of the instance is still an object." );  
assert( ninja instanceof Ninja, "The object was instantiated properly." );
assert( ninja.constructor == Ninja, "The ninja object was created by the Ninja function." );