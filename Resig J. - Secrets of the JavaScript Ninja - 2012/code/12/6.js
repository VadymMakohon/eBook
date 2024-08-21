// A simple implementation for setting and accessing attributes (using both expandos and normal DOM attributes).

(function(){

  // Map expando names
  var map = {
    "for": "htmlFor",
    "class": "className",
    readonly: "readOnly",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    rowspan: "rowSpan",
    colspan: "colSpan",
    tabindex: "tabIndex"
  };
  
  this.attr = function( elem, name, value ) {
    var expando = map[name] || name,
      expandoExists = typeof elem[ expando ] !== "undefined";
    
    if ( typeof value !== "undefined" ) {
      if ( expandoExists ) {
        elem[ expando ] = value;
      } else {
        elem.setAttribute( name, value );
      }
    }
    
    return expandoExists ?
      elem[ expando ] :
      elem.getAttribute( name );
  };
  
})();