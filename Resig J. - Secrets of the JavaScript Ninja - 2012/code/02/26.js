// Inspecting the number of arguments that a function is expecting.

function makeNinja(name){}
function makeSamurai(name, rank){}
assert( makeNinja.length == 1, "Only expecting a single argument" );
assert( makeSamurai.length == 2, "Multiple arguments expected" );