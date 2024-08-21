// Set outerHTML in an attempt to reclaim more memory in Internet Explorer.

// Remove the element (if it's in the DOM)
if ( this.parentNode )
  this.parentNode.removeChild( this );

if ( typeof this.outerHTML !== "undefined" )
  this.outerHTML = "";