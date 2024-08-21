// The remove element function from jQuery.

function remove() {
  // Go through all descendants and the element to be removed
  jQuery( "*", this ).add([this]).each(function(){
    // Remove all bound events
    jQuery.event.remove(this);
    
    // Remove attached data
    jQuery.removeData(this);
  });
  
  // Remove the element (if it's in the DOM)
  if ( this.parentNode )
    this.parentNode.removeChild( this );
}