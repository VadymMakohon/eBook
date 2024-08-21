// Decompiling a function into a string.

function test(a){
  return a + a;
}

assert( test.toString() === 
  "function test(a) {\n    return a + a;\n}",
  "A decompiled function." );