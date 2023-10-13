console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2>=1);
console.log(2<=1);

console.log("-----------------------------------------------------------------");

console.log("2">1); //true
console.log("02">1); //true 
console.log("02"==2); //true 

console.log("--------------------------NULL cha checking---------------------------------------");

console.log(null > 0) //false  0>0
console.log(null < 0) //false  0>0
console.log(null == 0) //false  null == 0
console.log(null >= 0) //true 0>=0
console.log(null <= 0)  //true 0<=0

/* 
The reason is that comparisons( < , > , <= , >=) and equality check( == ) works differently... comparisons convert null to a number 
treating it as a zero , that is why  null >= 0 and null <= 0 is true
We avoid null and undefined cha checking 
 
*/

console.log("--------------------------undefined cha checking---------------------------------------");

console.log(undefined > 0) //false  
console.log(undefined < 0) //false  
console.log(undefined == 0) //false  
console.log(undefined >= 0) //false
console.log(undefined <= 0)  //false

// === -> Strict checking hota ... It suggests that element tr same pahijech pn tyach barobr data type pn same pahije
console.log("--------------------------=== cha checking---------------------------------------");


console.log("02"==2); //true 
console.log("02"===2); //false 