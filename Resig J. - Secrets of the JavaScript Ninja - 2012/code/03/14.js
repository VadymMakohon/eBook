// A different technique for building a memoized function (using the code from Listing 3-13).

Function.prototype.memoize = function(){
  var fn = this;
  return function(){
    return fn.memoized.apply( fn, arguments );
  };
};

var isPrime = (function( num ) {
  var prime = num != 1;
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      prime = false;
      break;
    }
  }
  return prime;
}).memoize();

assert( isPrime(5), "Make sure the function works, 5 is prime." );
assert( isPrime._values[5], "Make sure the answer is cached." );