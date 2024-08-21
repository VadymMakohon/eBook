// Defining an object which has both private and public data, equally exposed using <code>with(){}</code>.

function Ninja(){with(this){
  // Private Information
  var cloaked = false;
  
  // Public property
  this.swings = 0;
  
  // Private Method
  function addSwing(){
    return ++swings;
  }
  
  // Public Methods
  this.swingSword = function(){
    cloak( false );
    return addSwing();
  };
  
  this.cloak = function(value){
    return value != null ?
      cloaked = value :
      cloaked;
  };
}}

var ninja = new Ninja();

assert( !ninja.cloak(), "We start out uncloaked." );
assert( ninja.swings == 0, "And with no sword swings." );

assert( ninja.cloak( true ), "Verify that the cloaking worked correctly." );
assert( ninja.swingSword() == 1, "Swing the sword, once." );
assert( !ninja.cloak(), "The ninja became uncloaked with the sword swing." );