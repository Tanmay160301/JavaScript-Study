const score=500;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(typeof balance.toString());
console.log(typeof score.toString());

console.log(balance.toFixed(2));;
console.log(balance.toFixed(4));;
console.log(balance.toFixed(1));;

const num=32.785;
console.log(num.toPrecision(3));
console.log(num.toPrecision(2));
console.log(num.toPrecision(1));


const numberToSee=1000000;
console.log(numberToSee.toLocaleString()); 

console.log("------------------------------------------------------");

console.log(Math.PI);
console.log(Math.abs(-4)); // It is used to convert negative value to a positive value
console.log(Math.abs(4)); // It is used to convert negative value to a positive value


console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));


console.log("--------------------------Exploring Math.random class--------------");
console.log(Math.random());// 0 to 1 chya range chya madhi number yenar
// To make a number fall between a specified range ...+1 kela ahe to start the range from 1(which is minimum in this case).... 
//here the range which i have assumed is 
// from 1 to 9
console.log(Math.floor(Math.random()*10+1)); 


/**
 * to make the range from 10 to 20 including 10
 */


let min=10;
let max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);
