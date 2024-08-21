// The result of a Caja conversion process.

// Original Code:
var test = true;
(function(){ var foo = 5; })();
Function.prototype.toString = function(){};

// Cajoled Code:
{
___.loadModule(function (___, IMPORTS___) {
{
  var Function = ___.readImport(IMPORTS___, 'Function');
  var x0___;
  var x1___;
  var x2___;
  var test = true;
  ___.asSimpleFunc(___.primFreeze(___.simpleFunc(function () {
    var foo = 5;
  })))();
  IMPORTS___[ 'yield' ] ((x0___ = (x2___ = Function,  
    x2___.prototype_canRead___? 
  x2___.prototype: ___.readPub(x2___, 'prototype')), 
  x1___ = ___.primFreeze(___.simpleFunc(function () {})), 
  x0___.toString_canSet___? (x0___.toString = x1___): 
  ___.setPub(x0___, 'toString', x1___)));
}
});
}