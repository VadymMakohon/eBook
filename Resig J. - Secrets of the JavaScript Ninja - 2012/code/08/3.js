// Getting a value from an evaluated object.

var obj = eval("({name:'Ninja'})");
assert( obj.name === "Ninja", "Objects require the extra parentheses." );

var fn = eval("(function(){return 'Ninja';})");
assert( fn() === "Ninja", "As do functions." );