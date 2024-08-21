// Changing function actions based upon the arguments.

function merge(root){
  for ( var i = 1; i < arguments.length; i++ )
    for ( var key in arguments[i] )
      root[key] = arguments[i][key];
  return root;
}

var merged = merge({name: "John"}, {city: "Boston"});
assert( merged.name == "John", "The original name is intact." );
assert( merged.city == "Boston", "And the city has been copied over." );