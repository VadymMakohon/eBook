// Wrapping an old function with a new piece of functionality.

function wrap(object, method, wrapper){
  var fn = object[method];
  return object[method] = function(){
    return wrapper.apply(this, [ fn.bind(this) ].concat(
      Array.prototype.slice.call(arguments)));
  };
}

// Example adapted from Prototype
if (Prototype.Browser.Opera) {
  wrap(Element.Methods, "readAttribute", function(orig, elem, attr){
    return attr == "title" ?
      elem.title :
      orig(elem, attr);
  });
}