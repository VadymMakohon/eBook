// An example of calling the inherited super method.

var Person = Class.extend({
  init: function(isDancing){
    this.dancing = isDancing;
  }
});

var Ninja = Person.extend({
  init: function(){
    this._super( false );
  }
});

var p = new Person(true);
assert( p.dancing, "The person is dancing." );

var n = new Ninja();
assert( !n.dancing, "The ninja is never dancing." );