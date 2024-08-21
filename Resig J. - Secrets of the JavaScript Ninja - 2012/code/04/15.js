// An example of accidentally introducing a variable into the global namespace.

function User(first, last){
  this.name = first + " " + last;
}

var name = "Resig";
var user = User("John", name);

assert( name == "John Resig", "The name variable is accidentally overridden." );