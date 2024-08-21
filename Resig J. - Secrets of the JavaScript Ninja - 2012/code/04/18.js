// An example of classical-style inheritance, using the code from Listing 4-19.

var Person = Object.subClass({
  init: function(isDancing){
    this.dancing = isDancing;
  },
  dance: function(){
    return this.dancing;
  }
});

var Ninja = Person.subClass({
  init: function(){
    this._super( false );
  },
  dance: function(){
    // Call the inherited version of dance()
    return this._super();
  },
  swingSword: function(){
    return true;
  }
});

var p = new Person(true);
assert( p.dance(), "Method returns the internal true value." );

var n = new Ninja();
assert( n.swingSword(), "Get true, as we expect." );
assert( !n.dance(), "The inverse of the super method's value - false." );

// Should all be true
assert( p instanceof Person && n instanceof Ninja && 
  n instanceof Person,
  "The objects inherit functionality from the correct sources." );