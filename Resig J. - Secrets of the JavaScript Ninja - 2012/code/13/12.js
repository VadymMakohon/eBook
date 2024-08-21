// Implement a cross-browser DOM ready event.

(function(){
  var isReady = false, DOMContentLoaded;
  
  // Catch cases where addReady is called after the
  // browser event has already occurred.
  if ( document.readyState === "complete" ) {
    return ready();
  }
  
  // Mozilla, Opera and Webkit currently support this event
  if ( document.addEventListener ) {
    DOMContentLoaded = function() {
      document.removeEventListener(
        "DOMContentLoaded", DOMContentLoaded, false );
      ready();
    };
    
    // Use the handy event callback
    document.addEventListener(
      "DOMContentLoaded", DOMContentLoaded, false );
    
  // If IE event model is used
  } else if ( document.attachEvent ) {
    DOMContentLoaded = function() {
      if ( document.readyState === "complete" ) {
        document.detachEvent(
          "onreadystatechange", DOMContentLoaded );
        ready();
      }
    };
    
    // ensure firing before onload,
    // maybe late but safe also for iframes
    document.attachEvent(
      "onreadystatechange", DOMContentLoaded );
    
    // If IE and not a frame
    // continually check to see if the document is ready
    var toplevel = false;
    
    try {
      toplevel = window.frameElement == null;
    } catch(e) {}
    
    if ( document.documentElement.doScroll && toplevel ) {
      doScrollCheck();
    }
  }
  
  function ready() {
    if ( !isReady ) {
      triggerEvent( document, "ready" );
      isReady = true;
    }
  }
  
  // The DOM ready check for Internet Explorer
  function doScrollCheck() {
    if ( isReady ) {
      return;
    }
    
    try {
      // If IE is used, use the trick by Diego Perini
      // http://javascript.nwbox.com/IEContentLoaded/
      document.documentElement.doScroll("left");
    } catch( error ) {
      setTimeout( doScrollCheck, 1 );
      return;
    }
    
    // and execute any waiting functions
    ready();
  }
})();