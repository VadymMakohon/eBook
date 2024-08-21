// An example of keeping a variable private but accessible via a closure.

function Ninja(){
  var slices = 0;
  
  this.getSlices = function(){
    return slices;
  };
  this.slice = function(){
    slices++;
  };
}

var ninja = new Ninja();
ninja.slice();
assert( ninja.getSlices() == 1, "We're able to access the internal slice data." );
assert( ninja.slices === undefined, "And the private data is inaccessible to us." );