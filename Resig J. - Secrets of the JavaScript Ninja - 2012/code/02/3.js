// Defining a function below a return statement.

function stealthCheck(){
  var ret = stealth() == stealth();
  assert( ret, "We'll never get below the return, but that's OK!" )
  return true;
  function stealth(){ return true; }
}
stealthCheck();