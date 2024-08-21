// Evaluate a script within the global scope.

function globalEval( data ) {
  data = data.replace(/^\s+|\s+$/g, "");