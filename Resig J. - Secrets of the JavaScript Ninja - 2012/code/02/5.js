// Defining an anonymous function as a property of an object and passed in as a callback to a timer.

var obj = {
  someMethod: function(){
      // This function is defined anonymously
      return true;
  }
};

setInterval(function(){
  // An anonymous function called every
  // 100 milliseconds
}, 100);