/*in java there is sequential execution but in JS if there is asynchronous call then the control is transferred to memory 
but the program still continues to be executed .

=> so it is a function which is passed as an argument to another function, which is later called in the outer function
=> these functions are primarily used in JS to create a asynchronous code
=> JS executes conde in sequential top-down order, but in some cases, we need code to run in a specific order. 
   callback functions are used to implement this and is knwon as asynchronous programming
=> function that accepts other function as arguments is known as higher order function, and it contains the logic for when the 
   callback function gets executed*/

//eg1
console.log("welome to settimeout")

//so we mention a timer and time in ms and after the timer expires the body is executed
setTimeout(//it takes 2 arguments, first is a function and second is timer
    () =>{
       console.log("After 5 ms the timer expires")//this will be executed when the timer get over so this will be printed last
    }

    ,5000
)

console.log("welcome to asynchronous programming")

//eg2
function y(){
    console.log("I am in y")
}

function x(y){//y is a callback function as y is passed as argument to x
    console.log("I am in x")
    y()
}

x(y)