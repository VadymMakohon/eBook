// Two examples of repeating timers.

setTimeout(function(){
  /* Some long block of code... */
  setTimeout(arguments.callee, 10);
}, 10);

setInterval(function(){
  /* Some long block of code... */
}, 10);