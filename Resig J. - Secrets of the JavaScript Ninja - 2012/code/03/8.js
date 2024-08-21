// Partially applying arguments to a native function (using the code from Listing 3-10).

String.prototype.csv = String.prototype.split.partial(/,\s*/);

var results = ("John, Resig, Boston").csv();
assert( results[1] == "Resig", "The text values were split properly" );