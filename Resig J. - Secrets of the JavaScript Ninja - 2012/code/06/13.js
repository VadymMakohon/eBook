// A common solution to stripping whitespace from a string.

function trim(str){
  return str.replace(/^\s+|\s+$/g, "");
}

assert( trim(" #id div.class ") == "#id div.class",
  "Trimming the extra whitespace from a selector string." );