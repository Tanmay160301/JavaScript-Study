/**
 *  As per my understanding , jr database madhun aleli value null asel kiva undefined asel tr
 *  tyala handle karnyacha mechanism karate null coalescing operartor .. maybe replace that undefined 
 *  or null value with some other value
 */

let val0=10??20; //10 janar inside val0
console.log(val0);

let val1=null ?? 10;
console.log(val1);

let val2=undefined ?? 20;
console.log(val2);

//Ternary operator

// conditon ? true : false 
const price=100;

price < 50? console.log("less than 50") : console.log("more than 50");;
