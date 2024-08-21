// Converting a string to camel case with a function replace regular expression.

assert( "font-family".replace( /-(\w)/g, function(all, letter){
    return letter.toUpperCase();
  }) == "fontFamily", "CamelCase a hyphenated string." );