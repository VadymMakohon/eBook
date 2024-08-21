// Using hasOwnProperty to build resilient object looping.

Object.prototype.otherKey = "otherValue";

var object = { key: "value" };
for ( var prop in object ) {
  if ( object.hasOwnProperty( prop ) ) {
    assert( prop, "key", "There should only be one iterated property." );
  }
}