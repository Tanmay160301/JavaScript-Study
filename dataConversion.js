let score="33";

console.log(score);
console.log(typeof score);

let valueInNumber=Number(score);
console.log(typeof valueInNumber); //number

// What if value of score is not in number 

let secondScore="33ab";

console.log(secondScore);
console.log(typeof secondScore);

let secondScoreValueInNumber=Number(secondScore);
console.log(secondScoreValueInNumber);//Nan
console.log(typeof secondScoreValueInNumber); // Number


// What if score is pure string

let Fourthscore= "Tanmay";
console.log(Fourthscore)
console.log(typeof Fourthscore)

let fourthScoreValueInNumber=Number(Fourthscore);
console.log(fourthScoreValueInNumber); // NaN
console.log(typeof fourthScoreValueInNumber);// number

// What if score is pure string , null , boolean , undefined

let thirdScore=true;

console.log(thirdScore)
console.log(typeof thirdScore)

let thirdScoreValueInNumber=Number(thirdScore);
console.log(thirdScoreValueInNumber); //1
console.log(typeof thirdScoreValueInNumber);// number



// What if score is null 
let fifthScore= null;
console.log(fifthScore)
console.log(typeof fifthScore)

let fifthScoreValueInNumber=Number(fifthScore);
console.log(fifthScoreValueInNumber); // 0 yenar
console.log(typeof fifthScoreValueInNumber);// number


// What if score is undefined 
let sixthScore;
console.log(sixthScore)
console.log(typeof sixthScore)

let sixthScoreValueInNumber=Number(sixthScore);
console.log(sixthScoreValueInNumber); // NaN yenar
console.log(typeof sixthScoreValueInNumber);// number


// Conversion of number 1 or number 0 into its equivalent Boolean value
console.log("----------------------------------------------------------------------------------------------");
console.log("Conversion of 1 and 0 into boolean");

let isLoggedInInNumber=1;
let isLoggedInInBoolean=Boolean(isLoggedInInNumber);

console.log(isLoggedInInBoolean);

/**
    1-> True , 0-> false
    ""->false
    "Tanmay"->true
 */

// Conversion of number into strings
console.log("----------------------------------------------------------------------------------------------");
console.log("Conversion of numbers into Strings ")

let somenumber=100;
let numberInString=String(somenumber);

console.log(numberInString);
console.log(typeof numberInString);