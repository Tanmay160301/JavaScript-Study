//Singleton object : Constructor pasun jr object banavala tr Singleton Object bannar...
//Literal pasun banavnar tr toh singleton nasnar


// We will study about object literals:


const mySymbol=Symbol("myvalue is");
// console.log(mySymbol);

//Identify the cases when to use dot operator and when to use square brackets when displaying the results of objects properties
//Observe that symbols la aapn declare kasa karto ani eka object literal madhe as a key value pair madhe kasa thevto
//How to declare functions as a property inside the object literal

const user={
    name:"Tanmay", // By default system hya name (key) la as a string consider karnar as : "name" : "Tanmay"
    age:22,
    "full name":"Tanmay Anupam Bhurke",
    [mySymbol]: "value1",
    location:"Kolhapur",
    email:"bhurketanmay@gmail.com",
    isLoggedIn:true,
    lastLoginDays:["Thursday","Saturday"]
}

console.log(user);
console.log(user.age);
console.log(user["age"]);//Another way of getting the value 

console.log(user["full name"]);

console.log(user.mySymbol);
console.log(typeof user.mySymbol);//String ahe but actual madhe hecha type jo ahe toh symbol ahe

console.log(user[mySymbol]);

//Observe that symbols la aapn declare kasa karto ani eka object literal madhe as a key value pair madhe kasa thevto

user.email="bhurketanmay@chatgpt.com";
console.log(user);

// Locking the object or freezing it

// Object.freeze(user);
//Ata objects madhle changes reflect nahi honar

user.age=25;

console.log(user);
 

//How to declare functions as a property inside the object literal
user.greeting=function(){
    console.log("Hello JS User");
}

console.log(user.greeting);//[function(anonymous)] : This is function cha reference
console.log(user.greeting());//Hello JS user 
                            //undefined
console.log(user);

console.log(typeof user.greeting);
 
user.interest="Coding";
console.log(user);

user.greetingTwo= function(){
    console.log(`Hello ${this.name} , Your interest is in ${this.interest}`);
}
console.log(user.greetingTwo());  

console.log(this);