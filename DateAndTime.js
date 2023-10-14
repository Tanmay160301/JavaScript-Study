//Where this concept is used 
// What is the concept 

let myDate= new Date(); //Current date chi information store honar date object madhe
console.log(myDate); // yyyy-mm-dd 
console.log(myDate.toString()); // yyyy-mm-dd ithe time pn det hota 
console.log(myDate.toDateString()); // yyyy-mm-dd ... ithe without time display honar
console.log(myDate.toISOString ()); 
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2008,0,4);// yyyy-mm-dd (mm-0 means starting from january) 
console.log(myCreatedDate.toDateString());
let myCreatedDate2=new Date(2008,0,4,5,3);// yyyy-mm-dd (mm-0 means starting from january) 
console.log(myCreatedDate2.toLocaleString());

//Another way of creating the date 

let createDate=new Date("2023-03-16");// yyyy-mm-dd
console.log(createDate);

//Timestamps

let myTimestamp=Date.now();
console.log(myTimestamp);

//Comparing two dates
TimestampForMyBDDAY=createDate.getTime();
console.log(TimestampForMyBDDAY);

let difference= myTimestamp-TimestampForMyBDDAY;
console.log(difference);

// How to convert the timestamp into millisecond
let mySeconds=Math.floor(Date.now()/1000);
console.log(mySeconds);


//Getting date , months and years
let now=new Date();
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());

