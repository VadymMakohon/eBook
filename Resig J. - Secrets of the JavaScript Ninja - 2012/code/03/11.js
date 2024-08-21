// Using partial application on a timer function.

var delay = setTimeout.partial(undefined, 10);

delay(function(){
  assert( true, "A call to this function will be temporarily delayed." );
});