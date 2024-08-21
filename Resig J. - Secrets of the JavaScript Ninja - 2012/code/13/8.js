// Event bubbling detection code originally written by Juriy Zaytsev.

function isEventSupported(eventName) {
  var el = document.createElement('div'), isSupported;
    
  eventName = 'on' + eventName;
  isSupported = (eventName in el);
    
  if ( !isSupported ) {
    el.setAttribute(eventName, 'return;');
    isSupported = typeof el[eventName] == 'function';
  }
    
  el = null;
  return isSupported;
}