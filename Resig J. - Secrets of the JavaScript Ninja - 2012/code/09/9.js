// An example of using object detection to provide a fallback experience for a browser.

if ( typeof document !== "undefined" && 
     (document.addEventListener || document.attachEvent) &&
     document.getElementsByTagName && document.getElementById ) {
  // We have enough of an API to work with to build our application
} else {
  // Provide Fallback
}