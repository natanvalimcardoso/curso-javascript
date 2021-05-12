var valores = [8, 1, 7, 4, 2, 9]

console.log(valores[0])
//console.log(valores) PRIMEIRA MANEIRA

/*
for (let pos = 0; pos < valores.length; pos < pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //[pos] mostrando a posicao
} SEGUNDA MANEIRA
*/ 

for (var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //TERCEIRA MANEIRA
}