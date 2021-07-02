  <!DOCTYPE html>
   <html>
    <head>
    <link rel="stylesheet" href="app/app.css" />
    </head>

    <body>
    <div id="q1"></div>
    <div id="q2"></div>
    <div id="q3"></div>
    <div id="q4"></div>
    <div id="q5"></div>
    <div id="q6"></div>

    <script>
      var app = { };
      app.getComponente = function (nome){
      if( !app[nome]) {
      app[nome] = { $ctrl:{} };
    }
    return app[nome];
  };
  </script>
  <script src="q1.js"></script>
  <script src="q2.js"></script>
  <script src="q3.js"></script>
  <script src="q4.js"></script>
  <script src="q5.js"></script>
  <script src="q6.js"></script>
 </body>
</html>
