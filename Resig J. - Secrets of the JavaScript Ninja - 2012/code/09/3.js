// Examples of having to use adoptNode before injecting a node into a new document.

// Shouldn't work
var node = documentA.createElement("div");
documentB.documentElement.appendChild( node );

// Proper way
var node = documentA.createElement("div");
documentB.adoptNode( node );
documentB.documentElement.appendChild( node );