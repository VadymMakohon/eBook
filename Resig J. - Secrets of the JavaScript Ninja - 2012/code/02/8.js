// Recursion using a function reference that no longer exists (using the code from Listing 2-7).

var samurai = { yell: ninja.yell };
var ninja = {};

try {
  samurai.yell(4);
} catch(e){
  assert( "Uh, this isn't good! Where'd ninja.yell go?" );
}