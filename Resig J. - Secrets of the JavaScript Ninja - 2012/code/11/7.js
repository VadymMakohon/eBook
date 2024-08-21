// A method for evaluating a script (even if it's remotely located).

function evalScript( elem ) {
  if ( elem.src )
    jQuery.ajax({
      url: elem.src,
      async: false,
      dataType: "script"
    });

  else
    jQuery.globalEval( elem.text || "" );

  if ( elem.parentNode )
    elem.parentNode.removeChild( elem );
}