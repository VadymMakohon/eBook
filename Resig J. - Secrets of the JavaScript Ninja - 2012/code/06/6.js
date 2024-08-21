// Using the exec method to do both capturing and a global search.

var html = "<div class='test'><b>Hello</b> <i>world!</i></div>";
var tag = /<(\/?)(\w+)([^>]*?)>/g, match;
var num = 0;

while ( (match = tag.exec(html)) !== null ) {
  assert( match.length == 4, "Every match finds each tag and 3 captures." );
  num++;
}

assert( num == 6, "3 opening and 3 closing tags found." );