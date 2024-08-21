// Using a capture reference, within a replace.

assert( "fontFamily".replace( /([A-Z])/g, "-$1" ).toLowerCase() ==
  "font-family", "Convert the camelCase into dashed notation." );