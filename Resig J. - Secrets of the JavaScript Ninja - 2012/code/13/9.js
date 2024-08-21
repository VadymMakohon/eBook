// An implementation of a cross-browser, bubbling, <code>submit</code> event.

(function(){
  // Check to see if the submit event works as we expect it to
  if ( !isEventSupported("submit") ) {
    this.addSubmit = function( elem, fn ) {
      // Still bind as normally
      addEvent( elem, "submit", fn );
  
      // But we need to add extra handlers if we're not on a form
      // Only add the handlers for the first handler bound
      if ( elem.nodeName.toLowerCase() !== "form" && 
           getData( elem ).events.submit.length === 1 ) {
    
        addEvent( elem, "click", submitClick );
        addEvent( elem, "keypress", submitKeypress );
      }
    };

    this.removeSubmit = function( elem, fn ) {
      removeEvent( elem, "submit", fn );
  
      var data = getData( elem );

      // Only remove the handlers when there's nothing left to remove
      if ( elem.nodeName.toLowerCase() !== "form" &&
           !data || !data.events || !data.events.submit ) {
    
        addEvent( elem, "click", submitClick );
        addEvent( elem, "keypress", submitKeypress );
      }
    };
    
  // Otherwise the event works perfectly fine
  // so we just behave normally
  } else {
    this.addSubmit = function( elem, fn ) {
      addEvent( elem, "submit", fn );
    };
    
    this.removeSubmit = function( elem, fn ) {
      removeEvent( elem, "submit", fn );
    };
  }
  
  // We need to track clicks on elements that will submit the form
  // (submit button click and image button click)
  function submitClick( e ) {
    var elem = e.target, type = elem.type;
  
    if ( (type === "submit" || type === "image") &&
         isInForm( elem ) ) {
      return triggerEvent( this, "submit" );
    }
  }
  
  // Additionally we need to track for when the enter key is hit on
  // text and password inputs (also submits the form)
  function submitKeypress( e ) {
    var elem = e.target, type = elem.type;
    
    if ( (type === "text" || type === "password") &&
         isInForm( elem ) && e.keyCode === 13 ) {
      return triggerEvent( this, "submit" );
    }
  }
  
  // We need to make sure that the input elements that we check
  // against are actually inside of a form
  function isInForm( elem ) {
    var parent = elem.parentNode;
    
    while ( parent ) {
      if ( parent.nodeName.toLowerCase() === "form" ) {
        return true;
      }
      
      parent = parent.parentNode;
    }
    
    return false;
  }
})();