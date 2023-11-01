//for of loops
const arr1= [1,2,3,4,5];

for (const num of arr1) {
    console.log(num);//here num is individual element of the array
}

const name="Tanmay Bhurke";
for (const character of name) {
    console.log(character);
}
 
//Commonly used syntax : Array of objects yenar from an API request or from backend and u have 
// to extract object properties from it...

// Arrays , objects and strings are iterable

//Maps in JS : 
const map= new Map();

map.set('IN','India');
map.set('AUS','Australia');
map.set('US','United States of America');
map.set('US','United States of America'); // ekdach store honar ...known for unique properties

console.log(map);

for (const value of map) {
    console.log(value); //ek entry eka array madhe yenar
}

for (const [key , value] of map) { // Array destructuring
    console.log(key +" -> " + value); 
}

const myObj={
    game1 : 'NFS',
    game2 : 'Price of Persia'
}

// for (const [key,value] of myObj) {// Error forof loop madhe myObj is not iterable 
//     console.log(game);
// }

// SO now the question arises , how to iterate through the objects
// Answer is using forin loop

//Lets create another object and let us try to iterate forin loop
const languages={
    js:"javascript",
    java: "java",
    cpp : "c++",
    py : "Python"

}
//lets iterate over keys  first

console.log("----------Here are keys of languages object------------");
for (const key in languages) {
    console.log(key);
}
//lets iterate over values next
console.log("-----------Here are values of languages object-----------");
for (const key in languages) {
    console.log(languages[key]);
}

for (const key in languages) {
    console.log(key +" -> "+ languages[key]);
}

// How forin loop behaves in context of arrays
//Array chi keys bydefault numbers astat (If we view Array as an Object) so thats why objects are 
//created

const arr2=["java" , "js" , "Python" , "C++"];

for (const key in arr2) {
    console.log(key);//index denar
}

for (const key in arr2) {
    console.log(arr2[key]);//index denar
}

//forin loop map varti chalavla ki kay honar?? 
 
const map2= new Map();

map2.set("n1",10);
map2.set("n2",20);
map2.set("n3",30);
map2.set("n4",40);
map2.set("n5",50);

// console.log(map2);

for (const val in map2) {
    console.log(val);
}

// forEach loop : Array chi ek inbuilt property ahe

let  coding=["Java", "JS", "Python" , "Golang", "cpp"];

coding.forEach((element) => {
    console.log(element);
});
//forEach chya aatla argument madhe je function ahe te callback function ahe

//What happens when we store it in a variable using a forEach loop

let thisVariable= coding.forEach( (item)=> {
    return item
})

console.log(`This variable is ${thisVariable}`);//undefined

//Second way of representing the forEach loop
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);// ithe function cha reference dila ahe bgh

// forEach has different arguments as well
coding.forEach(  (item, index, coding)=>{
    console.log(item,index,coding);
} )

//Array madhun kadhi kadhi objects yena he khup common operations astay
let myCoding=[
    {
        language: "JavaScript",
        fileName: "js"
    },
    {
        language: "Java",
        fileName: "java"
    },
    {
        language: "Python",
        fileName: "py"
    }
]

console.log(myCoding);
//Applying forEach loop for this
myCoding.forEach( (item)=> {
    console.log(item.fileName);
})



//FILTER FUNCTION
// Jr same array madhun filter karycha asel tr use filter function
const arrOfNums = [1,2,3,4,5,6,7,8,9,10];

let newArr = arrOfNums.filter( (item)=>{
    return item >=5;
} )

// The same can be performed with the help of forEach loop
a=[];
newArr.forEach( (num)=>{
    if (num>=5) {
        a.push(num)
    }
} )

console.log(newArr);
console.log(a);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let Books=books.filter( (item) => (item.publish>=2000) )
let Fiction=books.filter( (item) => {
    return item.genre === 'Fiction'
} )
console.log(Books);
console.log(Fiction);

//MAP FUNCTION

// const arrOfNums = [1,2,3,4,5,6,7,8,9,10]; 
//To change the content of the array and push it into new array

console.log(arrOfNums);

let newArrOfNums= arrOfNums.map( (x) => {
    return x+10;
} )

console.log(newArrOfNums);

let oneToTen =[1,2,3,4,5,6,7,8,9,10];

//You can chain multiple functions together 
let twentyOneToOneHundredOne=oneToTen.map( (x) => {return x*10}).map( (x) => {return x+1} ).filter( (item) => {
    return item > 40
}
)

console.log(twentyOneToOneHundredOne);

let sumOfReducerFunction=0;

sumOfReducerFunction=oneToTen.reduce( (accumulator, currentVal) => {
    console.log(`Acc : ${accumulator} and Current value: ${currentVal}`);
    return accumulator+currentVal;
} , 0)

console.log("The sum of Reducer Function is "+ sumOfReducerFunction);

// Shopping cart example
let myShoppingCart = [
    {
        itemName: "Mobile",
        price:10000
    },
    {
        itemName: "Mobile Case",
        price:200
    },
    {
        itemName: "Mobile Guard",
        price:100
    },
    {
        itemName: "School bag",
        price:1000
    }
]

let totalPrice = myShoppingCart.reduce( (accumulator , item) => {return accumulator+item.price} , 0 );
console.log(totalPrice);