// Compiling a regular expression for future use.

&lt;div class="foo ninja">&lt;/div>
&lt;div class="ninja foo">&lt;/div>
&lt;div>&lt;/div>
&lt;div class="foo ninja baz">&lt;/div>
&lt;script>
function find(className, type) {
  var elems = document.getElementsByTagName(type || "*");
  var re = new RegExp("(^|\\s)" + className + "(\\s|$)");
  var results = [];
  
  for ( var i = 0, length = elems.length; i &lt; length; i++ )
    if ( re.test( elems[i].className ) )
      results.push( elems[i] );
  
  return results;
}

assert( find("ninja", "div").length == 3, "Verify the right amount was found." );
assert( find("ninja").length == 3, "Verify the right amount was found." );
&lt;/script>