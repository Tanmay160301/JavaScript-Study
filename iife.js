// Immediately invoked function expression

(function db () { // This is called a named IIFE
    console.log("Database connected");
})();

(() =>(console.log("Database connected")))(); // This is an unnamed IIFE (which is an arrow function)

// How to pass a parameter to an IIFE
((dbName)=>(console.log(`Database ${dbName} is connected successfully !`)))("MySQL");