// Simple function recursion.

function yell(n){
  return n > 0 ? yell(n-1) + "a" : "hiy";
}

assert( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );