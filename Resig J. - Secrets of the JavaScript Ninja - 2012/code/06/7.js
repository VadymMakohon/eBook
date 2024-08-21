// Using back-references to match the contents of an HTML tag.

var html = "&lt;b class='hello'>Hello&lt;/b> &lt;i>world!&lt;/i>";
var tag = /&lt;(\w+)([^>]+)>(.*?)&lt;\/\1>/g;

var match = tag.exec(html);

assert( match[0] == "&lt;b class='hello'>Hello&lt;/b>", "The entire tag, start to finish." );
assert( match[1] == "b", "The tag name." );
assert( match[2] == " class='hello'", "The tag attributes." );
assert( match[3] == "Hello", "The contents of the tag." );

match = tag.exec(html);

assert( match[0] == "&lt;i>world!&lt;/i>", "The entire tag, start to finish." );
assert( match[1] == "i", "The tag name." );
assert( match[2] == "", "The tag attributes." );
assert( match[3] == "world!", "The contents of the tag." );