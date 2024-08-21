// Handling a variable number of function arguments.

function multiMax(multi){
  return multi * Math.max.apply( Math,
    Array.prototype.slice.call( arguments, 1 ));
}

assert( multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)" );