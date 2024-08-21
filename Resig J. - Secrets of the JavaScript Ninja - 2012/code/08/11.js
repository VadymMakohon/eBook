// Testing to see if function decompilation works as we expect it to.

assert( /abc(.|\n)*xyz/.test(function(abc){xyz;}),
	"Decompilation works as we except it to." );