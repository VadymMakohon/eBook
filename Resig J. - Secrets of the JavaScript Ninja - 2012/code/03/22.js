// An alternative means of putting a variable in the outer scope.

var jQuery = (function(){
  function jQuery(){
    // Initialize
  }

  // ...
  
  return jQuery;
})();