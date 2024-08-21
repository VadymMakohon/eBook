// Function recursion within an object.

var ninja = {
  yell: function(n){
    return n > 0 ? ninja.yell(n-1) + "a" : "hiy";
  }
};

assert( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." );