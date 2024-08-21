// Dynamically create a function using <code>new Function</code>.

var add = new Function("a", "b", "return a + b;");
assert( add(3, 4) === 7, "Function is created and works." );