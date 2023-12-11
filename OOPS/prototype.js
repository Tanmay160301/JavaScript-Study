// Refer the analogy (Haar na manna)
//Refer the diagram as well

/*
    Basic expectations from this code:
    Basic understanding about How functions can be made to behave like an objects as well
    Practically implemented a few task to understand the prototypal behaviour of objects

    Task#0: Constructor function chya ek level varti javoon prototype object chya aat ek
     function aapn embed kela so that other newinstances could make use of it

    Task #1: Creating a property and embedding it into prototype object so that other 
    instances can make use of it as well

    Task #2: Changing the prototype of the any object so that the object can access
     functionalities and properties of other objects

     Task #3: ek function lihycha named as trueLength and apply it to all the strings present
*/

// Can a JS function behave as an object? 
function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power =  2;

console.log(multiplyBy5(4));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//Conclusion: In Js everything is an object

//
function createUser(username, rollno){
    this.username = username;
    this.rollno = rollno;

    return this;
}

//Task 1:
// Apn ek level varti javoon function define kela ahe
//Run hotana pahila te swatachya constructor madhe bghnar jr function nahi milala tr varchya level varti
// javoon functionality use karnar
createUser.prototype.increment = function(){
    this.rollno++;

    return this.rollno;
}

createUser.prototype.printMyInfo = function(){
    return this;
}

// 
const user1 = new createUser("Tanmay", 31);
console.log(user1.increment())
console.log(user1.printMyInfo())
const user2 = new createUser("Yash", 117);
console.log(user2.increment())
console.log(user2.printMyInfo())
const user3 = new createUser("Varad", 14);
console.log(user3.increment())
console.log(user3.printMyInfo())

// Task 2 : Creating a property and embedding it into Object.prototype object so that other instances 
//like arrays, Strings , functions can make use of it as well

let superHeroPowers ={
    spiderman:"sling",
    thor:"hammer",

    spideysPower: function(){
        console.log(`My power is ${this.spiderman}`);
    },

    thorPower: function(){
        console.log(`My power is ${this.thor}`);
    }
}

console.log(superHeroPowers);
console.log(superHeroPowers.tanmay);//undefined

//object.prototype madhech me tanmay navacha function declare karnar so that its accessible to all
//the underlying objects

Object.prototype.tanmay= function()
{
    console.log("Tanmay is present in all");
}

console.log(superHeroPowers.tanmay());

//if i create an array out of it and see what happens
let arr = [1,2,3,45,6,67];
console.log(arr.tanmay())//Array.prototype la pn tyacha access milala

//Task 3 Changing the prototype of the any object so that the object can access 
//functionalities and properties of other objects
let teacher = {
    name : "Tanmay",

    greet: function(){
        console.log(`Hi my name is ${this.name}`);
    }
}

let teachingAssistant ={
    name:"Anish",
    isAvailable:true
}

Object.setPrototypeOf(teachingAssistant,teacher);
teachingAssistant.greet();

//Task 4: ek function lihycha named as trueLength and apply it to all the strings present 
String.prototype.trueLength = function(){
    return this.trim().length;
}

let myName="Tanmay         ";
console.log(myName.trueLength());// Now all Strings will have access to this property
