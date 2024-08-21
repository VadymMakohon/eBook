// An alternative to the example in Listing 3-16, returning a value from the enclosure.

document.addEventListener("click", (function(){
  var numClicks = 0;
  
  return function(){
    alert( ++numClicks );
  };
})(), false);