// A basic example of the <code>eval</code> function executing and returning a result.

assert( eval("5 + 5") === 10, "The code is evaluated and result returned " );
assert( eval("var t = 5;") === undefined, "No result returned." );
assert( t === 5, "But the t variable now exists." );

(function(){
  eval("var t = 6;");
  assert( t === 6, "eval is executed within the current scope." );
})();

assert( t === 5, "Verify that the scope execution was done correctly." );