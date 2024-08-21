// Examining how the base2 namespace property works.

base2.namespace ==
  "var Base=base2.Base;var Package=base2.Package;" + 
  "var Abstract=base2.Abstract;var Module=base2.Module;" + 
  "var Enumerable=base2.Enumerable;var Map=base2.Map;" + 
  "var Collection=base2.Collection;var RegGrp=base2.RegGrp;" + 
  "var Undefined=base2.Undefined;var Null=base2.Null;" + 
  "var This=base2.This;var True=base2.True;var False=base2.False;" +
  "var assignID=base2.assignID;var detect=base2.detect;" +
  "var global=base2.global;var lang=base2.lang;" + 
  "var JavaScript=base2.JavaScript;var JST=base2.JST;" +
  "var JSON=base2.JSON;var IO=base2.IO;var MiniWeb=base2.MiniWeb;" +
  "var DOM=base2.DOM;var JSB=base2.JSB;var code=base2.code;" +
  "var doc=base2.doc;"

assert( typeof DOM === "undefined", "The DOM object doesn't exist." );

eval( base2.namespace );

assert( typeof DOM === "object", "And now the namespace is imported." );
assert( typeof Collection === "object", "Verifying the namespace import." );