// Attempting to add a new property to a <code>with(){}</code>'d object.

var katana = {
  isSharp: true,
  use: function(){
    this.isSharp = !!this.isSharp;
  }
};

with ( katana ) {
  isSharp = false;
  cut = function(){
    isSharp = false;
  };
}

assert( !katana.cut, "The new cut property wasn't introduced here." );
assert( cut, "It was made as a global variable instead." );