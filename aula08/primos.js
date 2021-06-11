function numeroPrimo(n) {
 if (n < 2)
 return false;
 if (n == 2)
 return true;
 var maxDiv = Math.sqrt(n);
 for (var i = 2; i <= maxDiv; i++) {
 if (n % i == 0) {
 return false;
 }
 }
 return true;
}
console.log(2, " é um número primo? ", numeroPrimo(2));
console.log(3, " é um número primo? ", numeroPrimo(3));
console.log(4, " é um número primo? ", numeroPrimo(4));
console.log(5, " é um número primo? ", numeroPrimo(5));
console.log(9, " é um número primo? ", numeroPrimo(9)); 
