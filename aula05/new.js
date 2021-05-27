<html>
<head><title> Exercício 9: apresenta o quadrado de um número já informado internamente e, em seguida, em uma caixa de texto, permite que você informe um número para saber seu valor ao cubo.</title>

<script>
function quadrado(x)
{
document.write(x*x);
}

function cubo(x)
{
return x*x*x
}

y=5;
document.write("O quadrado de "+ y +" é igual a "); quadrado(y);
</script>

<body>
<form>
<br>Informe um número para saber seu valor ao cubo e, em seguida, pressione a tecla TAB ou dê um clique fora da caixa de texto.<br>
<input type ="text" name="aocubo" value="" onBlur ="alert('O cubo de '+this.value+' é '+cubo(this.value))">
</form>

<!--O evento onblur ocorre quando um objeto perde o foco.-->
</body>
</html>
