// An example of a central object store for DOM elements.

(function(){
var cache = {}, guid = 1, expando = "data" + (new Date).getTime();

this.getData = function( elem ) {
  var id = elem[ expando ];

  if ( !id ) {
    id = elem[ expando ] = guid++;
    cache[ id ] = {};
  }

  return cache[ id ];
};

this.removeData = function( elem ) {
  var id = elem[ expando ];
  
  if ( !id ) {
    return;
  }
  
  // Remove all stored data
  delete cache[ id ];
  
  // Remove the expando property from the DOM node
  try {
    delete elem[ expando ];
  } catch( e ) {
    if ( elem.removeAttribute ) {
      elem.removeAttribute( expando );
    }
  }
};
})();