//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined 

const id = Symbol('123')
const anotherId = Symbol('123') // JavaScript advanced madhe ha symbol cha data type use kela jatoy to make a component unique

console.log(id === anotherId); //false
console.log(id);
console.log(anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) : 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//My practice :

// creating Array
console.log("----------------creating Arrays-------------------------");
let myArray=["Naruto","Sasuke","Kakashi"];
let myArray2=["Naruto","Sasuke","Kakashi", 5, true, null];


console.log(myArray);

// creating Object
console.log("----------------creating Objects -------------------------");

let myObj2={

    name:"Tanmay",
    age:22
}

console.log(myObj2);

// creating Function
console.log("----------------creating Functions  -------------------------");
let myfun= function(){
    console.log("Here is my function")
}

console.log(myfun);

console.log("----------------checking TypeOf  -------------------------");

console.log(typeof myArray); // object
console.log(typeof myObj2); // object
console.log(typeof myfun); //function

console.log("----------------   -------------------------");

