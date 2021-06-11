function juntarArrays(ar1, ar2) {
 var ar = [];
 for (let el of ar1) {
 ar.push(el);
 }
 for (let el of ar2) {
 ar.push(el);
 }
 return ar;
}
var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = juntarArrays(ar1, ar2);
console.log(ar); 
