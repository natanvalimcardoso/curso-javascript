<body>
<script>
function validar()
{
if (document.cadastro.nome.value == "")
{ window.alert("Você deve preencher o campo Nome."); document.cadastro.nome.focus();
return false;
}
if (document.cadastro.observacoes.value == "")
{ window.alert("Você deve colocar alguma observação..."); document.cadastro.observacoes.focus();
return false;
}
}
</script>
