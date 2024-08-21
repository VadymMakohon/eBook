// Disallow attempts to change the type attribute on input elements in all browsers.

if ( name == "type" && elem.nodeName.toLowerCase() == "input" &&
     elem.parentNode )
  throw "type attribute can't be changed";