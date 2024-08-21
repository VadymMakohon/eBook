// Matching all characters, including endlines.

var html = "<b>Hello</b>\n<i>world!</i>";
assert( /.*/.exec(html)[0] === "<b>Hello</b>",
	"A normal capture doesn't handle endlines." );
assert( /[\S\s]*/.exec(html)[0] === "<b>Hello</b>\n<i>world!</i>",
  "Matching everything with a character set." );
assert( /(?:.|\s)*/.exec(html)[0] === "<b>Hello</b>\n<i>world!</i>",
  "Using a non-capturing group to match everything." );