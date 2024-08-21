// Merging multiple regular expressions together.

function RegMerge() {
  var expr = [];
  for ( var i = 0; i < arguments.length; i++ )
    expr.push( arguments[i].toString().replace(/^\/|\/\w*$/g, "") );
  return new RegExp( "(?:" + expr.join("|") + ")" );
}

var re = RegMerge( /Ninj(a|itsu)/, /Sword/, /Katana/ );
assert( re.test( "Ninjitsu" ), "Verify that the new expression works." );
assert( re.test( "Katana" ), "Verify that the new expression works." );