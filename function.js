// How to write a function

function sayMyName(){
    console.log("T");
    console.log("a");
    console.log("n");
    console.log("m");
    console.log("a");
    console.log("y");
}

sayMyName// function cha reference
sayMyName()// function execute hota

// function without return statement
function addition(number1,number2){
    console.log(number1+number2);
}

addition(5,"50");
addition(5,50 );

//function with return statement to store it in a variable 
function multiplication(number1,number2){
    return number1*number2;
}

let product=multiplication(5,5);
console.log(product);

// Where beginners make mistakes

function substraction(num1,num2)
{
    console.log(num1-num2);
}

let sub= substraction(6,5);
console.log("Substraction is : ", sub);//undefined because function ni return nahi kela ahe


// using backticks to display the content 
function loginUserMessage(username)
{
    if (!username) {
        console.log("Please enter valid username");
        return
    }
    return `${username} just logged in.`
}

//console.log(loginUserMessage("Tanmay"));//Tanmay just logged in
//console.log(loginUserMessage(""));//  just logged in
console.log(loginUserMessage());// undefined just logged in

// undefined true ka false
if (undefined) {
    console.log("True");
} else {
    console.log("False");
}

//Conclusion -> undefined means false
// default arguments in a function ... jr value pass keli nasel tr default ni function execute honar
function greeting(name="Eren")
{
    return `Good Morning , ${name}`;
}

console.log(greeting("Naruto"));
console.log(greeting());

// Rest Operator : for undefined number of arguments to take it in an array
function calculateCartPrice(...num1)
{
    return num1;
}

function calculateCartPrice2(num1,num2,...val)
{
    return val;
}

console.log(calculateCartPrice(100,200,300,400,500));
console.log(calculateCartPrice2(100,200,300,400,500));

//How objects are passed in functions and how they are used 
function comeObjects(anyObject)
{
    return `Hello, My name is ${anyObject.name}, and my interst is ${anyObject.interest} .`
}

console.log(comeObjects({
    name: "Naruto",
    interest:"Hokage"
}));

//How arrays are passed in functions and how they are used
const myArray=[1,2,3,4,5];

function returnThirdValue(anyArray){
    return anyArray[2];
}

console.log(returnThirdValue(myArray));

//Scopes types : global scope , block scope 
//How var has problems with scope

// function chya aat function: Closures cha intro

function one()
{
    const name="Tanmay";

    function two(){
        const website="Youtube";
        console.log(name);
    }

    //console.log(website);

    two()
}

one()

// Another example to understand scope

if(true)
{
    const uName="Tanmay";
    if (uName==="Tanmay") {
    const website=" Youtube";
    console.log(uName+website);    
    }
   // console.log(website); Error website is not defined
    
}
// console.log(uName); Error uName is not defined

// Introduction to hoisting

console.log(addOne(5));

function addOne(num){
    return num + 1;
}

//console.log(value(5));// Error Cannot access the variable before initialization

const value= function(num){
    return num + 2;
}

/**
 *  Other things to know functions kuthe thevle jatat
 * Functions cha execution context kay asto
 * How JavaScript treats variables
 * kasa ek final tree banavla jata jithe sagle functions and variables thevle jatat 
 * 
 */


//Hoisting chahc vishay
x = 5;
var x;

// y = 5;
// let y; Error: cannot access variblename before initialization

// z = 5;
// const z; Error: Syntx Error