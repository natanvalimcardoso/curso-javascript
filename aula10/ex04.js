<html>
<head>
<title> Exercício 6: apresentar a data em diversos formatos.</title>
<script>
hoje=new Date();
document.write("Data e hora completa: "+hoje); document.write("<br>Apenas o dia: "+hoje.getDate()); document.write("<br>Apenas o mês (0 a 11): "+hoje.getMonth()); document.write("<br>Apenas o ano: "+hoje.getFullYear()); document.write("<br>Apenas o dia da semana (0 a 6): "+hoje.getDay()); document.write("<br>Apenas a hora e minutos:
"+hoje.getHours()+":"+hoje.getMinutes());

</script>
</head>

<body>
</body>
</html>
