/**
 *  Basic expectations from this code:
 * 
 *  Basic understanding about callbacks : te pn ek prakare functions ch ahet je queue madhe astat and
 *  nantr stack madhe javoon execute hotat
 *  
 *  Basic understanding about Promises and promise objects
 *  
 *  Theoretical understanding  of promise
 * 
 *  Promise lihina(Promise Producer) vegla AND promise consume(Promise Consumer) karna vegla:
 *  PROMISE PRODUCER: Code responsible for doing asynchronous tasks and returning a promise object
 *  PROMISE CONSUMER: The code that uses or consumes the result of the asynchronous operation represented by the
 *  Promise. (.then().catch() cha syntax or async/ await functions)
 *  A promise can be in one of three states:
 
    PENDING: The initial state; the promise is neither fulfilled nor rejected.
    FULFILLED: The operation completed successfully, and the promise has a resulting value.
    REJECTED: The operation failed, and the promise has a reason for the failure.

      THEN IS ASSOCIATED WITH RESOLVED
      CATCH IS ASSOCIATED WITH REJECTED

    basic understanding about the syntax of how to write a promise and how to consume a promise
    Practically implemented how data is passed from promise producer to promise consumer
 *  
 *  then chi chaining means what
 * 
 *  Basic understanding about fetch API (fetch API nehmi promise object return karnar)
 *  practically made an api call using fetch API and printed few properties
 *  
 * 
 *  Basic understanding about Promise consumption via async / await functions
 * 
 *  
 */

const PromiseOne = new Promise(function (resolve, reject) {
  //Do an Async Task
  // Nehmi Async task zalyavr callback execute honar
  //EX: Read from database, network madhun data yena ahe, cryptographic computations ahet
  //jyaveli te async task complete hotil tyaveli toh promise resolve zala pahije or reject zala pahije
  //Promise resolve hone means resolve cha code run hone
  setTimeout(function () {
    console.log("Async Task1 is completed");
    resolve(); //This helps in connecting resolve and then
  }, 1000);
});

//resolve is associated with then
PromiseOne.then(function () {
  console.log("Promise1 is consumed!!");
});

//Another way of writting the promise
new Promise(function (resolve, reject) {
  //Do some async task
  setTimeout(function () {
    console.log("Async task2 is done");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise2 is resolved");
});

//ITHE MAJHYA LAPTOP MADHE NEW WALA(WITHOUT VARIABLE) DECLARE KELELA PROMISE ADI ZALA AND THEN
//VARIABLE WALA PROMISE NANTR EXECUTE ZALA BUT VICE VERSA OCCURED IN SIR'S LAPTOP

//If suppose Async task cha data aplyala consumption phase kiva resolution phase la pathvaychay
//It is done in this way
const Promise3 = new Promise(function (resolve, reject) {
  //Async Task
  setTimeout(function () {
    console.log("Async task 3 is done");
    resolve({ username: "Tanmay", userId: 2 });
  }, 1000);
});

Promise3.then(function (obj) {
  console.log("Promise3 is consumed " + obj.username); //so data is passed in this way
});

//PASSING VALUES FROM ONE THEN TO ANOTHER THEN (PARENT TO CHILD PASS)...HOW TO AVOID CALLBACK HELL
// USING CHAINING
// HOW TO HANDLE ERRORS USING CATCH

const promise4 = new Promise(function(resolve,reject){
    //some async task
    setTimeout(function(){
        console.log("Some async task is said to be done ");
        let error =true;
        if (!error) {// Jr error nasel
            resolve({userID:31,userName:"Tanmay"});
        }
        else{
            reject("Something went wrong");//It is associated with the catch function
        }
    },1000);

})

promise4.then(function(object){
    console.log(object);
    return object.userName;
})
.then(function(name){
    console.log("Hello ! My name is "+name+" And promise 4 is consumed");
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("The code inside the finally has to be executed at any cost");
})


//PROMISE CONSUMPTION USING ASYNC AWAIT

const promise5 = new Promise(function(resolve,reject){
    //Async Task
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({userID:31,userName:"Tanmay"});
        }
        else{
            reject("Something went wrong");
        }
    },1000)
    
});

async function consumePromise5(){
   try {
     //ithe promise resolve honar
     const response = await promise5;//Promise5 complete honyacha vat bghne
     console.log(response.userID);
   }
    catch (error) {
    // promise jr reject zala tr catch madhle instructions execute honar
    console.log(error);
   }
}
    
consumePromise5()


//Soemething about Fetch 
//fetch returns a promise object
// kutlya pn API la call kela ki fetch thorough resolve karu shatoy

async function getUserTanmay(){
    try {
        const response = await fetch('https://api.github.com/users/tanmay160301');
        console.log(typeof response);

        //If we do not write await here then pending object will be stored inside the data variable
        //jr promise pending state madhe asel tr tya thikani await lavaycha so that we will able to
        //hold its value inside the variable 
        const data =await response.json();

        console.log(data);
        console.log(typeof data);

    } catch (error) {
        console.log(error);
    }
    
}
getUserTanmay()

//We can do the same thing using then wala syntax

fetch('https://api.github.com/users/tanmay160301')
.then(function(object){
    return object.json();

})
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
})

/**
 * A fetch() promise only rejects when a network error is encountered (which is usually when there's a 
 * permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.).
 *  Instead, a then() handler must check the Response.ok and/or Response.status properties.
 * 
 * see the documentation of fetch ...ki jr fetch API request barobar options pn send karychae
 * astil tr what is the syntax:
 * https://developer.mozilla.org/en-US/docs/Web/API/fetch
 */