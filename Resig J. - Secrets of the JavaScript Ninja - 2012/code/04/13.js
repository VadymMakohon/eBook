// Simulating Array functionality but without the true sub-classing.

function MyArray(){}
MyArray.prototype.length = 0;

(function(){
  var methods = ['push', 'pop', 'shift', 'unshift', 
    'slice', 'splice', 'join'];
  
  for ( var i = 0; i < methods.length; i++ ) (function(name){
    MyArray.prototype[ name ] = function(){
      return Array.prototype[ name ].apply( this, arguments );
    };
  })(methods[i]);
})();

var mine = new MyArray();
mine.push(1, 2, 3);
assert( mine.length == 3, "All the items are on our sub-classed array." );
assert( !(mine instanceof Array), "We aren't sub-classing Array, though." );