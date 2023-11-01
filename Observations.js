
//Difference Between let and var : as per my understanding, var doesnt strictly follow scope rules 

// if (true) {
//     var power="fly"
//     console.log(`My power is ${power}`);
// }
// console.log(`My power is ${power}`);// ithe comfortably print zala


// if (true) {
//     let power2="thinking";
//     console.log(`My power is ${power2}`);
// }
// console.log(`My power is ${power2}`); // power 2 is not defined


// Some other observations ::


// const email = "bhurketanmay@gmail.com";

const email = []; // an empty array evaluates to true


if (email) {
    console.log("Email is there");
}
 else {
    console.log("Email is not there");
}

const object = {}; //an empty object evaluates to true


if (object) {
    console.log("object is there");
}
 else {
    console.log("object is not there");
}


/**
 * 
 *  Database madhun jyaveli value yeil ... ti empty ahe ki nahi te check karyla lagtey
 *  
 */

const arr=[];// database madhun aleli value 

if (arr.length === 0) {
    console.log("this array which has came from database is empty");
}

const obj={}; //database madhun aleli value

if (Object.keys(obj).length===0) {
    console.log("This object is empty ");
}


// document.write

for (let index = 0; index < 10; index++) {
    const element = index;
    document.write(element)//error yeto
    
}

