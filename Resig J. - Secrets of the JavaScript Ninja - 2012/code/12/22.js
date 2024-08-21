// A method for converting a string value into an array of RGB values (including the conversion of color names to values - full list is available in the source links).

var num = /rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/,
    pc = /rgb\(\s*([0-9.]+)%\s*,\s*([0-9.]+)%\s*,\s*([0-9.]+)%\s*\)/,
    hex = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
    hex2 = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/;

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
  var result;
  
  // Look for rgb(num,num,num)
  if (result = num.exec(color))
    return [parseInt(result[1]), parseInt(result[2]), 
      parseInt(result[3])];
  
  // Look for rgb(num%,num%,num%)
  if (result = pc.exec(color))
    return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, 
      parseFloat(result[3])*2.55];
  
  // Look for #a0b1c2
  if (result = hex.exec(color))
    return [parseInt(result[1],16), parseInt(result[2],16), 
      parseInt(result[3],16)];
  
  // Look for #fff
  if (result = hex2.exec(color))
    return [parseInt(result[1]+result[1],16), 
      parseInt(result[2]+result[2],16),
      parseInt(result[3]+result[3],16)];
  
  // Otherwise, we're most likely dealing with a named color
  return colors[color.replace(/\s+/g, "").toLowerCase()];
}

// Map color names to RGB values
var colors = {
  aqua:[0,255,255],
  azure:[240,255,255],
  beige:[245,245,220],
  black:[0,0,0],
  blue:[0,0,255],
  // ... snip ...
  silver:[192,192,192],
  white:[255,255,255],
  yellow:[255,255,0]
};