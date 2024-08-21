// An example of <code>with(){}</code> use within the Firebug Firefox extension.

const evalScriptPre = "with(__scope__.vars){ with(__scope__.api){" +
  " with(__scope__.userVars){ with(window){";
const evalScriptPost = "}}}}";