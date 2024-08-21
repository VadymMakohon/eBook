// Dynamically creating a function with <code>eval()</code>.

var fn = eval("false||function(){return true;}");
assert( fn() === true, "Verify that the function was created correctly." );