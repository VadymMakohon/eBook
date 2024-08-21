// An implementation of a cross-browser bubbling <code>change</code> event.

(function(){
  // We want to simulate change events on these elements
  var formElems = /textarea|input|select/i;
  
  // Check to see if the submit event works as we expect it to
  if ( !isEventSupported("change") ) {
    this.addChange = function( elem, fn ) {
      addEvent( elem, "change", fn );
      
      // Only add the handlers for the first handler bound
      if ( getData( elem ).events.change.length === 1 ) {
        addEvent( elem, "focusout", testChange );
        addEvent( elem, "click", changeClick );
        addEvent( elem, "keydown", changeKeydown );
        addEvent( elem, "beforceactivate", changeBefore );
      }
    };
    
    this.removeChange = function( elem, fn ) {
      removeEvent( elem, "change", fn );
      
      var data = getData( elem );
      
      // Only remove the handlers when there's
      // nothing left to remove
      if ( !data || !data.events || !data.events.submit ) {
        addEvent( elem, "focusout", testChange );
        addEvent( elem, "click", changeClick );
        addEvent( elem, "keydown", changeKeydown );
        addEvent( elem, "beforceactivate", changeBefore );
      }
    };
    
  // The change event works just fine
  } else {
    this.addChange = function( elem, fn ) {
      addEvent( elem, "change", fn );
    };
    
    this.removeChange = function( elem, fn ) {
      removeEvent( elem, "change", fn );
    };
  }
  
  // Check to see that the clickable inputs are updated
  function changeClick( e ) {
    var elem = e.target, type = elem.type;
    
    if ( type === "radio" || type === "checkbox" ||
         elem.nodeName.toLowerCase() === "select" ) {
      return testChange.call( this, e );
    }
  }
  
  // Change has to be called before submit
  // Keydown will be called before keypress,
  // which is used in submit-event delegation
  function changeKeydown( e ) {
    var elem = e.target, type = elem.type, key = e.keyCode;
    
    if ( key === 13 && elem.nodeName.toLowerCase() !== "textarea" ||
         key === 32 && (type === "checkbox" || type === "radio") ||
         type === "select-multiple" ) {
      return testChange.call( this, e );
    }
  }
  
  // Beforeactivate happens before the previous element is blurred
  // Use it to store information for later checking
  function changeBefore( e ) {
    var elem = e.target;
    getData( elem )._change_data = getVal( elem );
  }
  
  // Get a string value back for a form element
  // that we can use to verify if a change has occurred
  function getVal( elem ) {
    var type = elem.type, val = elem.value;
    
    // Checkboxes and radios only change the checked state
    if ( type === "radio" || type === "checkbox" ) {
      val = elem.checked;
      
    // Multiple selects need to check all selected options
    } else if ( type === "select-multiple" ) {
      val = "";
      
      if ( elem.selectedIndex > -1 ) {
        for ( var i = 0; i < elem.options.length; i++ ) {
          val += "-" + elem.options[i].selected;
        }
      }
      
    // Regular selects only need to check what
    // option is currently selected
    } else if ( elem.nodeName.toLowerCase() === "select" ) {
      val = elem.selectedIndex;
    }
    
    return val;
  }
  
  // Check to see if a change in the value has occurred
  function testChange( e ) {
    var elem = e.target, data, val;
    
    // Don't need to check on certain elements and read-only inputs
    if ( !formElems.test( elem.nodeName ) || elem.readOnly ) {
      return;
    }
    
    // Get the previously-set value
    data = getData( elem )._change_data;
    val = getVal( elem );
    
    // the current data will be also retrieved by beforeactivate
    if ( e.type !== "focusout" || elem.type !== "radio" ) {
      getData( elem )._change_data = val;
    }
    
    // If there's been no change then we can bail
    if ( data === undefined || val === data ) {
      return;
    }
    
    // Otherwise the change event should be fired
    if ( data != null || val ) {
      return triggerEvent( elem, "change" );
    }
  }
})();