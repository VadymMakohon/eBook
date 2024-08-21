// A prime computation function which memorizes its previously-computed values.

function isPrime( num ) {
  if ( isPrime.answers[ num ] != null )
    return isPrime.answers[ num ];
  
  var prime = num != 1; // Everything but 1 can be prime
  for ( var i = 2; i < num; i++ ) {
    if ( num % i == 0 ) {
      prime = false;
      break;
    }
  }
  return isPrime.answers[ num ] = prime;
}
isPrime.answers = {};

assert( isPrime(5), "Make sure the function works, 5 is prime." );
assert( isPrime.answers[5], "Make sure the answer is cached." );