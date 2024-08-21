// An example of some tests written to work in YUITest.

function testAssertNotUndefined() { 
  assertNotUndefined("1 should not be undefined", 1); 
  assertNotUndefined(1); 
} 

function testAssertNaN() { 
  assertNaN("a string should not be a number", "string"); 
  assertNaN("string"); 
} 

function testAssertNotNaN() { 
  assertNotNaN("1 should not be not a number", 1); 
  assertNotNaN(1); 
} 

function testFail() { 
  var excep = null; 
  try { 
    fail("Failure message"); 
  } catch (e) { 
    excep = e; 
  } 
  assertJsUnitException(
    "fail(string) should throw a JsUnitException", excep); 
} 