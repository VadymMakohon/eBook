// Examples of interacting with a with statement.

var obj = { foo: "bar" }, value;

// "No With"
for ( var i = 0; i < 1000; i++ ) {
  value = obj.foo;
}

// "Using With"
with(obj){
  for ( var i = 0; i < 1000; i++ ){
    value = foo;
  }
}

// "Using With, No Access"
with(obj){
  for ( var i = 0; i < 1000; i++ ){
    value = "no test";
  }
}