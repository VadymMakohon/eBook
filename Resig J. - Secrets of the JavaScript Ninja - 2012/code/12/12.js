// A method for getting the correct tab index of an element.

(function(){
  var check = /^(button|input|object|select|textarea)$/i,
      a = /^(a|area)$/i;
  
  this.getIndex = function(elem){
    var attributeNode = elem.getAttributeNode("tabIndex");
    return attributeNode && attributeNode.specified ?
      attributeNode.value :
      check.test( elem.nodeName ) || 
          a.test( elem.nodeName ) && elem.href ?
        0 :
        undefined;
  };
})();