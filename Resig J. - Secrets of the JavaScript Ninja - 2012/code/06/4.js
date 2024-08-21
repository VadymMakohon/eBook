// A simple function for getting the current opacity of an element.

&lt;div id="opacity" style="opacity:0.5;filter:alpha(opacity=50);">&lt;/div>
&lt;script>
function getOpacity(elem){
  var filter = elem.style.filter;
  return filter ?
    filter.indexOf("opacity=") >= 0 ?
      (parseFloat( filter.match(/opacity=([^)]*)/)[1] ) / 100) + "" :
      "" :
    elem.style.opacity;
}

window.onload = function(){
  assert( getOpacity( document.getElementById("opacity") ) == "0.5",
    "Get the current opacity of the element." );
};
&lt;/script>