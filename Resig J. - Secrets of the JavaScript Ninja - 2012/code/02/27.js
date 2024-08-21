// An example of method overloading using the <code>addMethod</code> function from Listing 2-28.

function Ninjas(){
  var ninjas = [ "Dean Edwards", "Sam Stephenson", "Alex Russell" ];
  // addMethod is defined in Listing 2-28
  addMethod(this, "find", function(){
    return ninjas;
  });
  addMethod(this, "find", function(name){
    var ret = [];
    for ( var i = 0; i < ninjas.length; i++ )
      if ( ninjas[i].indexOf(name) == 0 )
        ret.push( ninjas[i] );
    return ret;
  });
  addMethod(this, "find", function(first, last){
    var ret = [];
    for ( var i = 0; i < ninjas.length; i++ )
      if ( ninjas[i] == (first + " " + last) )
        ret.push( ninjas[i] );
    return ret;
  });
}

var ninjas = new Ninjas();
assert( ninjas.find().length == 3, "Finds all ninjas" );
assert( ninjas.find("Sam").length == 1, "Finds ninjas by first name" );
assert( ninjas.find("Dean", "Edwards").length == 1, "Finds ninjas by first and last name" );
assert( ninjas.find("Alex", "X", "Russell") == null, "Does nothing" );