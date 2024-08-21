// Preventing negative values to be set on CSS height and width properties.

// ignore negative width and height values
if ( (key == 'width' || key == 'height') && parseFloat(value) < 0 )
  value = undefined;