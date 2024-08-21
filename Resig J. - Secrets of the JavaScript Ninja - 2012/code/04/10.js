// Using the hasOwnProperty method to tame Object prototype extensions.

Object.prototype.keys = function(){
  var keys = [];
  for ( var i in this )
    if ( this.hasOwnProperty( i ) )
      keys.push( i );
  return keys;
};

var obj = { a: 1, b: 2, c: 3 };

assert( obj.keys().length == 3, "Only the 3 existing properties are included." );