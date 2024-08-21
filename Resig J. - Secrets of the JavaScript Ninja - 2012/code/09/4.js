// A simple example of catching the implementation of a new API.

function attachEvent( elem, type, handle ) {
  // bind event using proper DOM means
  if ( elem.addEventListener )
    elem.addEventListener(type, handle, false);
    
  // use the Internet Explorer API
  else if ( elem.attachEvent )
    elem.attachEvent("on" + type, handle);
}