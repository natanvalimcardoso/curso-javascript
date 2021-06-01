<head>
<title> Formulário Padrão HTML COM JavaScript </title>
<script>
nome1=window.prompt("Qual seu nome?"); document.write("Olá, "+nome1+"!");
</script>
</head>


Exercício 3: Alterar o script do Exercício 2 para: testar leitura da janela

<script>
nome1=window.prompt("Qual seu nome?"); if (nome1!=null	&&	nome1!="")
{
document.write("Olá, "+nome1+"!");
}
else
{
document.write("Olá, visitante!");
}
</script>
