// Attempting to evaluate code into a global variable.

(function(){
  eval("var test = 5;");
})();

assert( typeof test === "undefined", "Variable is confined to temporary enclosures." );