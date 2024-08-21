// Verifying the identity of a named, anonymous, function.

var ninja = function myNinja(){
  assert( ninja == myNinja, "This function is named two things - at once!" );
};
ninja();
assert( typeof myNinja == "undefined", "But myNinja isn't defined outside of the function." );