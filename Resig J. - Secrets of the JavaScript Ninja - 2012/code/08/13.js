// The json2.js pre-parsing code (enforcing the integrity of incoming JSON strings).

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\
  \u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

cx.lastIndex = 0;
if (cx.test(text)) {
  text = text.replace(cx, function (a) {
    return '\\u' + ('0000' +
      (+(a.charCodeAt(0))).toString(16)).slice(-4);
  });
}

if (/^[\],:{}\s]*$/.test(
  text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
  .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+\
    (?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
  .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

  j = eval('(' + text + ')');
}