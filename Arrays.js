const myarr=[0,1,2,3,4 , "Tanmay", false];
console.log(myarr);
console.log(myarr[5]);

const array= new Array(1,2,3,4);
console.log(array);

console.log(typeof myarr);
console.log(typeof array);

// Array Methods Push and pop array chya end varti kam kartat
myarr.push(10);
myarr.push(20);

console.log(myarr);

myarr.pop();

console.log(myarr);


//Shift and unshift array chya suruvatila push and pop kartat
myarr.unshift(100);
console.log(myarr);

myarr.shift();
console.log(myarr);

console.log(myarr.includes(7));
console.log(myarr.indexOf(7));//-1

// join(): converts the elements of an array into string 
console.log(myarr);
console.log(myarr.join());

// slice or splice
// While studying arrays also check ki kuthle properties original array varti kam kartat and kutle properties fkt copy varti kam kartat
const arr1=[0,1,2,3,4,5,6];
console.log(arr1.slice(2,5));
console.log(`The original array is ${arr1}`); //[0,1,2,3,4,5,6]

console.log(arr1.splice(2,5));
console.log(`The original array is ${arr1}`); //[0,1]
 
