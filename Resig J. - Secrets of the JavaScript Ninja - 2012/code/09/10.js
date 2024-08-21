// Defining a global variable that captures information about how a browser feature works and using it later on.

// Run once, at the beginning of the program
var ELEMENTS_ONLY = (function(){
  var div = document.createElement("div");
  div.appendChild( document.createComment("test" ) );
  return div.getElementsByTagName("*").length === 0;
})();

// Later on:
var all = document.getElementsByTagName("*");

if ( ELEMENTS_ONLY ) {
  for ( var i = 0; i < all.length; i++ ) {
    action( all[i] );
  }
} else {
  for ( var i = 0; i < all.length; i++ ) {
    if ( all[i].nodeType === 1 ) {
      action( all[i] );
    }
  }
}