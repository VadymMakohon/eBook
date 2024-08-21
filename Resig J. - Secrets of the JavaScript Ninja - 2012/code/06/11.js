// A technique for compressing a query string.

function compress(data){
  var q = {}, ret = [];
    
  data.replace(/([^=&]+)=([^&]*)/g, function(m, key, value){
    q[key] = (q[key] ? q[key] + "," : "") + value;
    return "";
  });
    
  for ( var key in q )
    ret.push( key + "=" + q[key] );
  
  return ret.join("&");
}

assert( compress("foo=1&foo=2&blah=a&blah=b&foo=3") == 
	"foo=1,2,3&blah=a,b", "Verify the compression." );