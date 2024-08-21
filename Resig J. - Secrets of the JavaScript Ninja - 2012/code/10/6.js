// A regular expression for breaking apart a CSS selector.

var selector = "div.class > span:not(:first-child) a[href]"
var chunker = /((?:\([^\)]+\)|\[[^\]]+\]|[^ ,\(\[]+)+)(\s*,\s*)?/g;
var parts = [];

// Reset the position of the chunker regexp (start from beginning)
chunker.lastIndex = 0;

// Collect the pieces 
while ( (m = chunker.exec(selector)) !== null ) {
  parts.push( m[1] );
  
  // Stop if we've countered a comma
  if ( m[2] ) {
    extra = RegExp.rightContext;
    break;
  }
}

assert( parts.length == 4, "Our selector is broken into 4 unique parts." );
assert( parts[0] === "div.class", "div selector" );
assert( parts[1] === ">", "child selector" );
assert( parts[2] === "span:not(:first-child)", "span selector" );
assert( parts[3] === "a[href]", "a selector" );