// Placing a variable outside of a function wrapper.

(function(){
  var jQuery = window.jQuery = function(){
    // Initialize
  };

  // ...
})();