// Examples of values returned from eval.

assert( (true) === true, "Variables, objects, and primitives all work." );
assert( (t = 5), === 5, "Assignment returns the assigned value." );
assert( typeof (function(){}) === "function", "A function is returned." );