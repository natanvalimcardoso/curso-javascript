function somarArray(ar){
 var soma = 0;
 for (var i = 0; i < ar.length; i++) {
 soma += ar[i];
 }
 return soma;
}
var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var soma = somarArray(ar);
console.log(soma); 
