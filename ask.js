<html>
<head>
<title> Exercício 15: saudações ao usuário.</title>
</head>
<body>

<script language="JavaScript"> var dia = new Date();
var hora = dia.getHours();
var minuto = dia.getMinutes();
if ((hora==1)||(hora==2)||(hora==3)||(hora==4) || (hora==5)) document.write( "Você não devia estar dormindo?");
if ((hora==6) || (hora==7) || (hora==8) || (hora==9) || (hora==10)|| (hora==11)) document.write( "Bom dia!");
if (hora==12) document.write( "Vamos almoçar?");
if ((hora==13) || (hora==14) || (hora==15) || (hora==16) || (hora==17)) document.write( "Boa Tarde!");
if ((hora==18) || (hora==19)) document.write( "Bom final de tarde!");
if ((hora==20) || (hora==21) || (hora==22)) document.write( "Boa noite!"); if (hora==23) document.write( "Ó Meu! Já é quase meia-noite!");
if (hora==0) document.write( "Meia-noite! Já é amanhã!");
</script>

<br><br>
<!--
Agora você deve acrescentar os seguintes testes:<br><br>

1)	Mensagem "Vamos para aula!" quando for 19:30 <br>
2)	Mensagem "Hora do RECREIO!" quando for 20:50 <br>
3)	Mensagem "Vamos embora, a aula terminou!" quando for 22:30 <br>
-->
</body>
</html>
