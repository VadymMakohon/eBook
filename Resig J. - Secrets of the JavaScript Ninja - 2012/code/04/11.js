// Adding a method to the Number prototype.

Number.prototype.add = function(num){
  return this + num;
};

var n = 5;
assert( n.add(3) == 8, "It works fine if the number is in a variable." );

assert( (5).add(3) == 8, "Also works if a number is wrapping in parentheses." );

// Won't work, causes a syntax error
// assert( 5.add(3) == 8, "Doesn't work, causes error." );