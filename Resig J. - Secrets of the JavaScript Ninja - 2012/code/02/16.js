// A simple example of using a self-caching function.

function getElements( name ) {
  return getElements.cache[ name ] = getElements.cache[ name ] ||
    document.getElementsByTagName( name );
}
getElements.cache = {};