// A function for determining if an element (or document) is from an XML document.

function isXML( elem ) {
  return (elem.ownerDocument || elem)
    .documentElement.nodeName !== "HTML";
}