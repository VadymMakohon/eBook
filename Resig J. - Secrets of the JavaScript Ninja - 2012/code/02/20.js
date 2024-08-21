// Two methods of modifying a function's context.

function add(a, b){
  return a + b;
}

assert( add.call(this, 1, 2) == 3, ".call() takes individual arguments" );
assert( add.apply(this, [1, 2]) == 3, ".apply() takes an array of arguments" );