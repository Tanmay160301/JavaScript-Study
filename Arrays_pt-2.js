const school_friends=["Yash Patankar", "Varad Shinde", "Viraj Bhosale"];
const college_friends=["Sanket Khorate", "Kaushik Walwadkar", "Dattatray Bhopale"];

// school_friends.push(college_friends);
console.log(school_friends);

// console.log(school_friends[3][0]);

friends=school_friends.concat(college_friends);
//Another way of doing this is by using spread operator: With it we can concatenate multiple arrays

my_friends=[...school_friends,...college_friends];

console.log(friends);
console.log(my_friends);

const anotherarray=[1,2,3,[1,2,3,[1,2,[9]]]];
let thisarray1=anotherarray.flat(1);
let thisarray2=anotherarray.flat(Infinity);
console.log(thisarray1); 
console.log(thisarray2); 
console.log(anotherarray); 

let score1=100;
let score2=200;
let score3=300;
let scoreArray=Array.of(score1,score2,score3);
console.log(scoreArray);


console.log(Array.isArray("Tanmay"));
console.log(Array.isArray(school_friends));
console.log(Array.from("Tanmay"));
 
console.log(Array.from({name:"Tanmay"})) //specify karyala lagtay ki keys cha array banvaycha ahe ka values cha array banvaycha ahe