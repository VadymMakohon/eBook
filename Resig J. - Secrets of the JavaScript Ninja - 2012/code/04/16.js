// Enforcing the correct context with arguments.callee and instanceof.

function User(first, last){
  if ( !(this instanceof arguments.callee) )
    return new User(first, last);
  
  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( user, "This was defined correctly, even if it was by mistake." );
assert( name == "Resig", "The right name was maintained." );