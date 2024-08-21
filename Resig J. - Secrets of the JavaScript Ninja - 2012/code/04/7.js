// Implementing the JavaScript 1.6 array forEach method in a future-compatibile manner.

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function(fn, thisp){
    for ( var i = 0; i < this.length; i++ ) {
      fn.call( thisp || null, this[i], i, this );
    }
  };
}

["a", "b", "c"].forEach(function(value, index, array){
  assert( value, "Is in position " + index + " out of " + 
    (array.length - 1) );
});