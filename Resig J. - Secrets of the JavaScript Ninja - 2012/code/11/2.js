// Generate a list of DOM nodes from some markup.

function getNodes(htmlString){
  var map = {
    "<td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<option": [1, "<select multiple='multiple'>", "</select>"]
    // a full list of all element fixes
  };
  
  var name = htmlString.match(/<\w+/),
    node = name ? map[ name[0] ] : [0, "", ""];
  
  var div = document.createElement("div");
  div.innerHTML = node[1] + htmlString + node[2];
  
  while ( node[0]-- )
    div = div.lastChild;
  
  return div.childNodes;
}

assert( getNodes("<td>test</td><td>test2</td>").length === 2,
  "Get two nodes back from the method." );
assert( getNodes("<td>test</td>")[0].nodeName === "TD",
  "Verify that we're getting the right node." );