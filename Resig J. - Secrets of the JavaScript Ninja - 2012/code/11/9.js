// A portion of the element clone code from jQuery.

function clone() {
  var ret = this.map(function(){
    if ( !jQuery.support.noCloneEvent && !jQuery.isXMLDoc(this) ) {
      var clone = this.cloneNode(true),
        container = document.createElement("div");
      container.appendChild(clone);
      return jQuery.clean([container.innerHTML])[0];
    } else
      return this.cloneNode(true);
  });