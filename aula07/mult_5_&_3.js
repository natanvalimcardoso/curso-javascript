<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Exercício</title>
    <script>
      var multiplos3 = 0;
      var multiplos5 = 0;
      for (i = 0; i < 1000; i++) {
        multiplos3 += (i % 3 == 0) ? i : 0;
        multiplos5 += (i % 5 == 0) ? i : 0;
      }
      document.write("Somatórios dos Múltiplos de 3: " + multiplos3 + "<br>"); //guanabara
      document.write("Somatórios dos Múltiplos de 5: " + multiplos5 + "<br>");
      document.write("Somatórios dos Múltiplos de 5 e 3: " + parseInt(multiplos3+multiplos5));
    </script>
  </head>
  <body>
    <h1>Exercício 07</h1>
  </body>
</html>
