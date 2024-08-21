// Converting a JSON string into a JavaScript object using the eval function.

var json = '{"name":"Ninja"}';
var object = eval("(" + json + ")");

assert( object.name === "Ninja", "Verify that the object evaluated and came out." );