// Inheriting functionality from the Array object.

function MyArray(){}
MyArray.prototype = new Array();

var mine = new MyArray();
mine.push(1, 2, 3);
assert( mine.length == 3, "All the items are on our sub-classed array." );
assert( mine instanceof Array, "Verify that we implement Array functionality." );