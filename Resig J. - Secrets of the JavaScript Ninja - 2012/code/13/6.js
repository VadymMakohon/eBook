// Trigger a bubbling event on an element.

function triggerEvent( elem, event ) {
  var handler = getData( elem ).handler,
    parent = elem.parentNode || elem.ownerDocument;
  
  if ( typeof event === "string" ) {
    event = { type: event, target: elem };
  }
  
  if ( handler ) {
    handler.call( elem, event );
  }
    
  // Bubble the event up the tree to the document,
  // Unless it's been explicitly stopped
  if ( parent && !event.isPropagationStopped() ) {
    triggerEvent( parent, event );
  
  // We're at the top document so trigger the default action
  } else if ( !parent && !event.isDefaultPrevented() ) {
    var targetData = getData( event.target ),
      targetHandler = targetData.handler;
    
    if ( event.target[ type ] ) {
      // Temporarily disable the bound handler,
      // don't want to execute it twice
      if ( targetHandler ) {
        targetData.handler = function(){};
      }
      
      // Trigger the native event (click, focus, blur)
      event.target[ type ]();
      
      // Restore the handler
      if ( targetHandler ) {
        targetData.handler = targetHandler;
      }
    }
  }
}