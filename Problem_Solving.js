let arr=[1,2,3,4,5]
console.log(Math.min(...arr));

function breakingRecords(scores) {
    // Write your code here
    
    let max=scores[0], min=scores[0] , maxNum=0, minNum =0;
    
    
    for(let i=1 ;i<scores.length ; i++)
    {
        if((Math.max(max,scores[i])===scores[i]) && max!==scores[i] )
            maxNum++;
        
        if(Math.min(min,scores[i])===scores[i] && min!==scores[i] )
            minNum++;
    }
    return [maxNum,minNum];
}


let scores=[10, 5, 20, 20, 4, 5, 2, 25, 1]
console.log(breakingRecords(scores))



function sockMerchant(n, ar) {
    // Write your code here
    //create an empty object
    //traverse the array ... jr entry nasel tr add ... jr entry asel tr count ++
    let myObj={}, count=0;
    for( let i=0 ; i<ar.length ; i++)
    {
        if(myObj.hasOwnProperty(ar[i])){
            myObj[ar[i]]++;
            continue;
        }
        else{
            myObj[ar[i]]=1;
        }
        
    }
    let val = Object.values(myObj);
    console.log(val);
    console.log("fine");
    for( let i=0 ; i<val.length ; i++)
    {
        //tempCount for finding pairs
        while( (val[i] - 2 ) >= 0 && val[i] > 0){
           
                count++;
                val[i]= val[i]-2;
            
        }
                   
        
    }
      return count;
}

console.log(sockMerchant(9,[10, 20, 20 ,10 ,10 ,30 ,50 ,10 ,20]))

function superReducedString(s) {
    // Write your code here
    //ek loop vaparycha 
    //check 2 characters compare karyche
    //charAt vaparun kay tr karu shaktoy
    //Purna traverse karuyat string for loop gheuyat ani tyachyat 2 variables use karuyat
    //replace characters using empty string
    
    if(s.length === 1)
        console.log(s);
    
    let arr=Array.from(s);
    console.log(arr);
    let i=0;
    while(i<arr.length)
    {
        if(arr[i] === arr[i+1])
        {
            arr.splice(i,2);
            if (i==0) {
                continue;
            }
            else{
                i--;
                continue;
            }
            
        }
        i++;
    }
     s=arr.toString();
     s.replace(",","");
    console.log(s);

}
superReducedString("baab")



function getTotalX(a, b) {
    // Write your code here
    let all=[...a,...b],result=[],element=0,count=0;
    // console.log(all.length);
    for(let i=0;i<all.length;i++)
    {
        element=all[i];
        console.log("element :", element);
        let j=0;
        while(j<all.length)    
        {
            if((all[j]%element) ===0){
                count ++
                console.log(count);
            }
            j++;
            console.log("j :",j);
        }
        if(count==all.length-1){
            result.push(element);
        }
        
        count=0;
    }
      
    return result;
    
}

console.log(getTotalX([3,4],[24,28]));

function timeConversion(s) {
    // Write your code here
    //AM la kasa tackle karuyat 
    //PM la kasa tackle karuyat
    
    /* 
    so firstly convert it into array using that colon as delimiter
    substring AM/PM ahe ka bghycha 
    AM asel tr 12 la 0 bghcha  bakicha same
    PM asel tr 12 la 12ch consider karycha ani pudche hela +arraycha pahila number consider(lots of conversion here)
    
    */
    
    const arr = s.split(":")
    console.log(arr);

    if(arr[2].includes('PM'))
    {
        //PM
        if (arr[0]==12) {
            arr[0]='12';
            
        }
        else{
            let newHr = 12 + Number(arr[0]); //Add
            arr[0]=newHr.toString();
            console.log(arr[0]);
        }
        
    }
    else{
        //AM
        if (arr[0]==12) {
            arr[0]='00';
        }
    }
    let source= arr[2].slice(2);
    // console.log(source);
    arr[2] = arr[2].replace(source , "");
    // console.log(arr[2]);
    console.log(arr.toString());
    let outputString=arr.toString();
    outputString = outputString.replaceAll(",",":");

}

timeConversion("10:05:45AM");


function diagonalDifference(arr) {
    // Write your code here
    //left to right cha sum
    //right to left cha sum gheu
    //diff gheun absolute value return karu
    let leftToRightSum=0,rightToLeftSum=0;
    
    for(let i=1;i<=arr.length;i++)
        leftToRightSum+=arr[i-1][i-1];
    
    console.log(leftToRightSum);

    for(let i=0,j=arr.length-1 ; i<arr.length && j>=0 ;i++ , j--)
        {
           
                rightToLeftSum+=arr[i][j];
                console.log(`i=${i} and j=${j}`);
            
        }
    console.log(rightToLeftSum);
    let difference=leftToRightSum-rightToLeftSum;
    return Math.abs(difference);

}
console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-2]]));

const array=[5,4,3,2,1];
console.log(array.sort());
console.log(array);

function birthdayCakeCandles(candles) {
    // Write your code here
    let count=0;
    let largestElement=0;
    
    // let largestElement=candles[candles.length - 1];
    for (let i = 0; i < candles.length; i++) {
        if (candles[i]>largestElement) {
            largestElement=candles[i];
        }
        
    }
    console.log(largestElement);
    for (let i = 0; i < candles.length; i++) {
        if (candles[i]===largestElement) {
            count++;
        }
        
    }
    // console.log(count);
    return count;
}

console.log(birthdayCakeCandles([4,4,1,3,34]));