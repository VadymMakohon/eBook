// Storing unique functions within a structure.

var store = {
  id: 1,
  cache: {},
  add: function( fn ) {
    if ( !fn.id ) {
      fn.id = store.id++;
      return !!(store.cache[fn.id] = fn);
    }
  }
};

function ninja(){}
assert( store.add( ninja ), "Function was safely added." );
assert( !store.add( ninja ), "But it was only added once." );