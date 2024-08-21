// A function for extracting the argument names for a function.

function argumentNames(fn) {
  var found = /^[\s\(]*function[^(]*\(\s*([^)]*?)\s*\)/.exec(fn);
  return found && found[1] ? found[1].split(/,\s*/) : [];
}

assert( argumentNames( argumentNames )[0] === "fn", "Get the first argument name." );

function temp(){}

assert( argumentNames( temp ).length === 0, "No arguments found." );