// Performing performance analysis on a function.

perf("String Concatenation", function(){
  var name = "John";
  for ( var i = 0; i < 20; i++ )
    name += name;
});