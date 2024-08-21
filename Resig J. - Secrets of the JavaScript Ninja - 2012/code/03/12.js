// Using partial application on event binding.

var bindClick = document.body.addEventListener
  .partial("click", undefined, false);

bindClick(function(){
  assert( true, "Click event bound via curried function." );
});