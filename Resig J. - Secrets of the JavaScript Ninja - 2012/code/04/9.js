// The unexpected behavior of adding extra properties to the Object prototype.

Object.prototype.keys = function(){
  var keys = [];
  for ( var i in this )
    keys.push( i );
  return keys;
};

var obj = { a: 1, b: 2, c: 3 };

assert( obj.keys().length == 4, "The 3 existing properties plus the new keys method." );