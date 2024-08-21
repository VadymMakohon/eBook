// Looping with a function callback.

function loop(array, fn){
  for ( var i = 0; i < array.length; i++ )
    if ( fn.call( array, array[i], i ) === false )
      break;
}

var num = 0;

loop([0, 1, 2], function(value, i){
  assert(value == num++,
    "Make sure the contents are as we expect it.");
});