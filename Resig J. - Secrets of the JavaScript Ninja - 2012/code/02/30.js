// A more complex, but more resistant, way of determining if a value is a function.

function isFunction( fn ) {
  return Object.prototype.toString.call(fn) ===
    "[object Function]";
}