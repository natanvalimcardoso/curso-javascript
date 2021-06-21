<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Exercício</title>
    <script>
      function calcularDelta() {
        var a = document.getElementById("a").value;
        var b = document.getElementById("b").value;
        var c = document.getElementById("c").value;
        resultadoHTML =  "";
        resultadoHTML += "&Delta; = " + b + "<sup>2</sup> - 4 * " + a + " * " + c + '<br>';
        resultadoHTML += "&Delta; = " + b * b + " - 4 * " + a + " * " + c + '<br>';
        resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a + " * " + c + '<br>';
        resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a * c + '<br>';
        resultadoHTML += "&Delta; = " + parseInt(b * b - 4 * a * c) + '<br>';
        document.getElementById("resultadoDelta").innerHTML = resultadoHTML;
      }
    </script>
  </head>
  <body>
    <h1>Exercício 11</h1>
    <h3>&Delta; = b<sup>2</sup> - 4 . a . c</h3>
    <label for="a">Valor de a: </label>
    <input id="a" type="number" min="0" max="100"><br>
    <label for="b">Valor de b: </label>
    <input id="b" type="number" min="0" max="100"><br>
    <label for="c">Valor de c: </label>
    <input id="c" type="number" min="0" max="100"><br><br>
    <button onclick="calcularDelta()">Calcular o &Delta;</button>
    <p></p>
    <div id="resultadoDelta"></div>
  </body>
</html>
