// Using our templating system to generate HTML.

&lt;html>
&lt;head>
  &lt;script type="text/tmpl" id="colors">
    &lt;p>Here's a list of &lt;%= items.length %> items:&lt;/p>
    &lt;ul>
      &lt;% for (var i=0; i &lt; items.length; i++) { %>
        &lt;li style='color:&lt;%= colors[i % colors.length] %>'>
          &lt;%= items[i] %>&lt;/li>
      &lt;% } %>
    &lt;/ul>
    and here's another...
  &lt;/script>
  &lt;script type="text/tmpl" id="colors2">
    &lt;p>Here's a list of &lt;%= items.length %> items:&lt;/p>
    &lt;ul>
      &lt;% for (var i=0; i &lt; items.length; i++) { 
        print("&lt;li style='color:", colors[i % colors.length], "'>", 
          items[i], "&lt;/li>");
      } %>   
    &lt;/ul>
  &lt;/script>
  &lt;script src="tmpl.js">&lt;/script>
  &lt;script>
    var colorsArray = ['red', 'green', 'blue', 'orange'];

    var items = [];
    for ( var i = 0; i &lt; 10000; i++ )
      items.push( "test" );

    function replaceContent(name) {
      document.getElementById('content').innerHTML =
        tmpl(name, {colors: colorsArray, items: items});
    }
  &lt;/script>
&lt;/head>
&lt;body>
  &lt;input type="button" value="Run Colors"
    onclick="replaceContent('colors')">
  &lt;input type="button" value="Run Colors2"
    onclick="replaceContent('colors2')">
  &lt;p id="content">Replaced Content will go here&lt;/p>
&lt;/body>
&lt;/html>