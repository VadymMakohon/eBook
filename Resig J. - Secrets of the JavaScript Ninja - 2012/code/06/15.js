// A trim method which slices at the rear of the string.

function trim(str) {
  var str = str.replace(/^\s\s*/, ''),
    ws = /\s/, i = str.length;
  while (ws.test(str.charAt(--i)));
  return str.slice(0, i + 1);
}