// What context refers to within a function.

function katana(){
  this.isSharp = true;
}
katana();

assert( isSharp === true, "A global object now exists with that name and value." );

var shuriken = {
  toss: function(){
    this.isSharp = true;
  }
};
shuriken.toss();

assert( shuriken.isSharp === true,
  "It's an object property, the value is set within the object." );