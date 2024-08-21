// Testing an asynchronous operation.

test(function(){
  setTimeout(function(){
    assert( true, "Timer was successful." );
    resume();
  }, 100);
});