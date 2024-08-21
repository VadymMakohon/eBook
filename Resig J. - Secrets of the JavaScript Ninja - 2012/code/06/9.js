// Matching multiple words using a non-capturing group

var re = /((?:ninja-)+)sword/;
var ninjas = "ninja-ninja-sword".match(re);

assert( ninjas[1] == "ninja-ninja-", "Match both words, without extra capture." );