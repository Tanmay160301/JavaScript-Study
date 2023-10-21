/* this keyword ... ani vegveglya environment madhe tyachi value differ karate...node madhe differ karate
    browser madhe differ karate..purvi javascript browser madhech chalat hoti ata aapn te javascript  
    cha runtime environment fkt browser madhech nahi limit kelela ... humans interested in javascript
    technology have created standalone applications in it like node , bun etc

    this refers to the value of the current context (Imp)

    Arrow function cha syntax bg as it will be used most of the time in React js

    Jr me console.log(this) browser madhe kela tr  mala Window object disnar ... Because browser sathicha
    global object Window astoy
    Browser chya aat jo global object ahe toh Window ahe


    Global Context: If the function is called in the global scope 
    (i.e., not within any object or specific context), this will refer to the global object, 
    which is typically window in a web browser or global in Node.js. 
*/

const user = {
  username: "Tanmay",
  price: 50,
  greeting: function () {
    console.log(`Welcome ${this.username} , to this platform`);
    console.log(this);
  },
};

console.log(user.greeting());
user.username = "Kakashi";
console.log(user.greeting());

console.log(this); //{}


//Investigating this inside a function

function investigateThis1() {
  console.log(this);
}

function investigateThis2() {
    const username="abc";
    console.log(this.username);//undefined
}

investigateThis2();

//Arrow function 
//Syntax 1 : with parenthesis (Parenthesis madhe lihila tr return keyword lihyla lagtay)
let sum1 = (num1,num2) => {
    return num1+num2;
}
//Syntax 2 : without parenthesis (This syntax will be most used in react) asa function which only return
let sum2= ( num1 , num2 ) => (num1+num2) // eka line madhe return karat asel tr 

console.log(sum1(2,3));
console.log(sum2(2,3));


// Lets investigate what will happen if we console.log(this) inside the arrow function
let investigateThisInArrowFun = () => {
    console.log(this);//{} point to empty object
}

investigateThisInArrowFun()

//Using arrow function to display object

let obj = () => ({name:"Naruto"})

console.log(obj());