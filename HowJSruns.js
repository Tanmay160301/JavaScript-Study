/* 

https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
  #:~:text=When%20the%20JavaScript%20engine%20scans,for%20the%20variables%20and%20functions.


  as per my understanding;
  whenever we click on run button, 
  a global execution context is created and is loaded into the stack ,
  and then 2 phases occur when the program is interpreted line by line 
  A] Memory creation phase
    --> variables are assigned memory and undefined is stored into it 
    --> functions are assigned memory and references are stored
  B] Code execution phase 
    --> This is responsible for evaluating any expressions 
    -->If while executing, a function is encountered, the function is pushed into stack , 
    which means the function exection environment is created
    the same thing is repeated ... A] and B] for function 



  */