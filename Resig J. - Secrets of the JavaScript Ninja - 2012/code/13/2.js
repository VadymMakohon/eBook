// Implement some basic event object normalization.

function fixEvent( event ) {
  if ( !event || !event.stopPropagation ) {
    var old = event || window.event;
    
    // Clone the old object so that we can modify the values
    event = {};
    
    for ( var prop in old ) {
      event[ prop ] = old[ prop ];
    } 
    
    // The event occurred on this element
    if ( !event.target ) {
      event.target = event.srcElement || document;
    }
    
    // Handle which other element the event is related to
    event.relatedTarget = event.fromElement === event.target ?
      event.toElement :
      event.fromElement;
    
    // Stop the default browser action
    event.preventDefault = function() {
      event.returnValue = false;
      event.isDefaultPrevented = returnTrue;
    };
    
    event.isDefaultPrevented = returnFalse;
    
    // Stop the event from bubbling
    event.stopPropagation = function() {
      event.cancelBubble = true;
      event.isPropagationStopped = returnTrue;
    };
    
    event.isPropagationStopped = returnFalse;
    
    // Stop the event from bubbling and executing other handlers
    event.stopImmediatePropagation = function() {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    };
    
    event.isImmediatePropagationStopped = returnFalse;
    
    // Handle mouse position
    if ( event.clientX != null ) {
      var doc = document.documentElement, body = document.body;
      
      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }
    
    // Handle key presses
    event.which = event.charCode || event.keyCode;
    
    // Fix button for mouse clicks:
    // 0 == left; 1 == middle; 2 == right
    if ( event.button != null ) {
      event.button = (event.button & 1 ? 0 :
        (event.button & 4 ? 1 :
          (event.button & 2 ? 2 : 0)));
    }
  }
  
  return event;
  
  function returnTrue() { return true; }
  function returnFalse() { return false; }
}