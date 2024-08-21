// Dean Edward's technique for getting at pixel values for different united properties.

// If we're not dealing with a regular pixel number
// but a number that has a different ending, we need to convert it
if ( /^[0-9.]+(em|ex|pt|%)?$/i.test( value ) ) {
  // Remember the original values
  var left = elem.style.left, rsLeft = elem.runtimeStyle.left;
  
  // Put in the new values to get a computed value out
  elem.runtimeStyle.left = elem.currentStyle.left;
  elem.style.left = value || 0;
  ret = elem.style.pixelLeft + "px";
  
  // Revert the changed values
  elem.style.left = left;
  elem.runtimeStyle.left = rsLeft;
}