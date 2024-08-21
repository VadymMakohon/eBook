// Creating a temporary enclosure for persisting a variable.

(function(){
  var numClicks = 0;
  
  document.addEventListener("click", function(){
    alert( ++numClicks );
  }, false);
})();