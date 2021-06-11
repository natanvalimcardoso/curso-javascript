function somarDigitos(n) {
 var s = n.toString();
 var soma = 0;
 for (var char of s) {
 var digito = parseInt(char);
 soma += digito;
 }
 return soma;
}
var resultado = somarDigitos(1235231);
console.log("Soma de todos os dígitos: ", resultado); 
