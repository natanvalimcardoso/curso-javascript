function dividirValores(valor1, valor2){
    if(valor2 == 0){
        return "Erro, divisão por zero!";
    }else{
        return valor1 / valor2;
    }
}

function limparDados(){
    inputResultado.value = "";
    calculo.primeiroValor = 0;
    calculo.segundoValor = 0;
    calculo.funcaoParaCalcular = null;
