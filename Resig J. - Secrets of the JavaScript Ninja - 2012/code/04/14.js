// The result of leaving off the new operator from a function call.

function User(first, last){
  this.name = first + " " + last;
}

var user = User("John", "Resig");
assert( typeof user == "undefined", "Since new wasn't used, the instance is undefined." );