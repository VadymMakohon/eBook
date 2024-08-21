// Matching Unicode characters in a CSS selector.

var str = "\u0130\u0131\u0132";
assert( ("#" + str).match(new RegExp("#([\\w\u0128-\uFFFF_-]+)")),
  "Verify that our RegExp matches a Unicode selector." );