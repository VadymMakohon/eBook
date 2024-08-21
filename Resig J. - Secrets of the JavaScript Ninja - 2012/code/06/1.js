// Two examples of creating a compiled regular expression.

var re = /test/i;
var re2 = new RegExp("test", "i");

assert( re.toString() == "/test/i", "Verify the contents of the expression." );
assert( re.test( "TesT" ), "Make sure the expression work." );
assert( re2.test( "TesT" ), "Make sure the expression work." );
assert( re.toString() == re2.toString(), "The contents of the expressions are equal." );
assert( re != re2, "But they are different objects." );