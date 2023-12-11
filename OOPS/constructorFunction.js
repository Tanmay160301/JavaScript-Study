/*
    Basic expectations from this code:
    Basic understanding of Constructor functions
    Practically creating a constructor functions

*/

// const promiseObj = new Promise();
// const date = new Date();
//Constructor function eka thikani ahe  and new keyword pasun heche objects create hotat

function User(username, age , isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn  = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${username}`);
    }

    return this;// even if this is commented By default it will return the object
}

const userOne = new User("Tanmay", 18 , true);// In this way new object is created 
const userTwo = new User("Yash", 19 , true);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);// gives reference to the constructor function

// What is the importance of new keyword?
// Internally what exactly is happening when we write a new keyword ... How an object is actually created

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object(newInstance) gets linked to the prototype property of the constructor 
function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is
 bound to the newly created object. If no explicit return value is specified from the constructor, 
 JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return
 a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/