const name ="Tanmay";
console.log(name);
const repoCount=4;

console.log(`Hello , My name is ${name} and my Repository count is ${repoCount}`);

//Another way of representing the strings :

const anotherName= new String("Anish");// key value cha form madhe store honar
console.log(anotherName);
console.log(anotherName.length);
console.log(anotherName.charAt(-1));// Nahi chalat
console.log(anotherName.indexOf('s'));// position detay 
console.log(anotherName.toUpperCase());//original value is not changed , its copy is changed
console.log(anotherName.__proto__);


console.log(anotherName.slice(1,3));//slice madhe aapn negative values pn use karu shakto

//Anish
console.log(anotherName.slice(-4,-1));//slice madhe aapn negative values pn use karu shakto here -1 means last character

const dusraNav=anotherName.substring(1,3);
console.log(dusraNav);


let myName="    Tanmay      ";
console.log(myName);
console.log(myName.trim());


let url= "https://www.google.com/tanmay%50Bhurke";
let modifiedURL=url.replace('%50',' ');
console.log(modifiedURL);

console.log(url.includes('tanmay'));
console.log(url.includes('anish'));



// Investigation ... fkt pahila occurencech replace hoto 
let stringName="Tanmay-Anupam-Bhurke";
stringName=stringName.replace('-',' ');
console.log(stringName);//Tanmay Anupam-Bhurke

//Splitting the string
let beforeSplit="Tanmay-Anupam-Bhurke";
let afterSplit=beforeSplit.split('-');
console.log(afterSplit);

