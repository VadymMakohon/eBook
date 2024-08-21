// A trim method breaking down into two expressions.

function trim(str){
  return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}