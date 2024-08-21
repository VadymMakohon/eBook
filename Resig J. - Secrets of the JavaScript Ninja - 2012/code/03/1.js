// A few examples of closures.

var outerValue = true;

function outerFn(arg1){
  var innerValue = true;
  
  assert( outerFn && outerValue, "These come from the closure." );
  assert( typeof otherValue === "undefined",
    "Variables defined late are not in the closure." );
  
  function innerFn(arg2){
    assert( outerFn && outerValue, "These still come from the closure." );
    assert( innerFn && innerValue && arg1, "All from a closure, as well." );
  }
  
  innerFn(true);
}

outerFn(true);

var otherValue = true;

assert( outerFn && outerValue, "Globally-accessible variables and functions." );