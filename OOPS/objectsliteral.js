//Object literals
/*
    Basic expectations from this code:
    Basic understanding about the difference between object literals and objects created by the 
    constructor functions using new keyword
    Basic understanding of How it is linked with Object.Prototype
    Basic understanding about this keyword
*/
let user ={
    userName: "Tanmay Bhurke",
    loginCount: 8,
    isSignedIn: true,

    getUserDetails: function(){
        console.log("The details are grabbed from database");
    },

    getUserDetails2: function(){
        console.log(`Name is : ${this.userName} `);// this refers to the current context of the object 
    },

    getUserDetails3: function(){
        console.log(this);//current context is an object
    }
}

console.log(user);
console.log(user.getUserDetails());
console.log(user.getUserDetails2());
console.log(user.getUserDetails3());
console.log(this);//here the current context is global object which is an empty object
// when i console.log(this) in chrome then its global context is window object


