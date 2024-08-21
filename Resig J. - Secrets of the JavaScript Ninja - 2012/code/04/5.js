// Instantiating a new object using only a reference to its constructor.

var ninja = new Ninja();
var ninja2 = new ninja.constructor();

assert( ninja2 instanceof Ninja, "Still a ninja object." );