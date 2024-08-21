// Binding click events to two elements using Yahoo UI - done both normally and using <code>with(){}</code>.

YAHOO.util.Event.on(
  [YAHOO.util.Dom.get('item'), YAHOO.util.Dom.get('otheritem')],
  'click', function(){
    YAHOO.util.Dom.setStyle(this,'color','#c00');
  }
);

with ( YAHOO.util.Dom ) {
  YAHOO.util.Event.on([get('item'), get('otheritem')], 'click', 
  	function(){ setStyle(this,'color','#c00'); });
}