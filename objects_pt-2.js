//Singleton objects kashe create kele jatat : using Constructor
//2 kiva 3 objects la aapn eka object madhe kasa embed karu shaktoy : using spread operator
//Aapn object che properties la eka array madhe kasa gheu shaktoy
//Aapn object che properties madhlya keys kiva  values la eka array madhe kasa gheu shaktoy
//Aapn objects la nest pn karu shaktoy


const tinderUser=new Object();
tinderUser.id=1;
tinderUser.name="Varad Shinde";
tinderUser.isLoggedIn=true;

console.log(tinderUser);

console.log("-----------------------Nesting of Objects----------------------")

const regularUser={
    email:"bhurketanmay@gmail.com",
    name:{
        fullName:{
            firstName:"Tanmay",
            lastName:"Bhurke"
        }
    }

}


console.log(regularUser.email);
console.log(regularUser.name);
console.log(regularUser.name.fullName);
console.log(regularUser.name.fullName.firstName);

console.log("-----------------------Combining Objects----------------------")
let objA={ 1:"a" , 2:"b" } ;
const objB={ 3:"x" , 4:"y" } ;
const objC=Object.assign({},objA,objB);


objA={...objA,...objB};

console.log(objC);
console.log(objA);



console.log("-----------------------Applying Spread Operator-----------------------")

//Applying spread operator on objects
const obj1={ 1:"a" , 2:"b" } ;
const obj2={ 3:"x" , 4:"y" } ;



const obj3={...obj1,...obj2};


console.log(obj3);

//Database madhun generally array of objects yenar 
const users=[
    {
        id:1,
        email:"bhurketanmay@gmail.com"
    },
    {
        id:2,
        email:"bhurkeanish@gmail.com"
    },
    {
        id:3,
        email:"bhurkearya@gmail.com"
    }

]

console.log(users[2].email);

//Aapn object che properties madhlya keys kiva  values la eka array madhe kasa gheu shaktoy
console.log("-----------------------Extracting keys or values in Array-----------------------")
const keys=Object.keys(tinderUser);
const values=Object.values(tinderUser);

console.log(keys);
console.log(values);


//Aapn object che properties la eka array madhe kasa gheu shaktoy
console.log("-----------------------Extracting properties in Array-----------------------")
const properties=Object.entries(tinderUser);


console.log(properties);


console.log(tinderUser.hasOwnProperty('isLoggedIn')) 

console.log(this);
