function retornarPositivos(ar){
 var ar2 = [];
 for (var i = 0; i < ar.length; i++) {
 var el = ar[i];
 if (el >= 0) {
 ar2.push(el);
 }
 }
 return ar2;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = retornarPositivos(ar);
