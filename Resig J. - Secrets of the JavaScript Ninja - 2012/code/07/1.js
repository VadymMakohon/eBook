// Exposing the properties of the katana object using <code>with(){}</code>.

var use = "other";
var katana = {
  isSharp: true,
  use: function(){
    this.isSharp = !this.isSharp;
  }
};

with ( katana ) {
  assert( true, "You can still call outside methods." );
  
  isSharp = false;
  use();
  
  assert( use !== "other", "Use is a function, from the katana object." );
  assert( this !== katana, "this isn't changed - it keeps its original value" );
}

assert( typeof isSharp === "undefined", "Outside the with, the properties don't exist." );
assert( katana.isSharp, "Verify that the method was used correctly in the with." );