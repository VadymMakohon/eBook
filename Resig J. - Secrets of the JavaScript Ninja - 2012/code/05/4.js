// A simple asynchronous test suite.

(function(){
  var queue = [], timer;
  
  this.test = function(fn){
    queue.push( fn );
    resume();
  };
  
  this.pause = function(){
    clearInterval( timer );
    timer = 0;
  };
  
  this.resume = function(){
    if ( timer === 0 ) {
      return;
    }
    
    timer = setInterval(function(){
      if ( queue.length ) {
        queue.shift()();
      } else {
        pause();
      }
    }, 1);
  };
})();

test(function(){
  pause();
  setTimeout(function(){
    assert( true, "First test completed" );
    resume();
  }, 100);
});

test(function(){
  pause();
  setTimeout(function(){
    assert( true, "Second test completed" );
    resume();
  }, 200);
});