function parimpar (n) {
    if(n % 2 == 0){
        return 'par'
    }else {
        return 'impar'
    }
}

let res = parimpar(4) //jogar dentro de uma VARIAVEL (let,var)
console.log(res)      //chamar essa funcao para cima

//ou 

//console.log(parimpar(4)) // MESMA COISA