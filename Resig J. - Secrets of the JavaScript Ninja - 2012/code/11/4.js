// Figure out the actual insertion point of an element.

  function root( elem, cur ) {
    return elem.nodeName.toLowerCase() === "table" && 
      cur.nodeName.toLowerCase() === "tr" ?
      (elem.getElementsByTagName("tbody")[0] ||
        elem.appendChild(elem.ownerDocument.createElement("tbody"))) :
      elem;
  }