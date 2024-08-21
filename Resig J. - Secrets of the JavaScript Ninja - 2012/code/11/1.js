// Make sure that XML-style HTML elements are interpreted correctly.

var tags = /^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i;

function convert(html){
  return html.replace(/(<(\w+)[^>]*?)\/>/g, function(all, front, tag){
    return tags.test(tag) ?
      all :
      front + "></" + tag + ">";
  });
}

assert( convert("<a/>") === "<a></a>", "Check anchor conversion." );
assert( convert("<hr/>") === "<hr/>", "Check hr conversion." );