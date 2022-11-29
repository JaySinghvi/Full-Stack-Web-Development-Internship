/*it allows variables and functions to be used even before it is declared
declaration of var/function is moved to the top of the scopr(whether local/global) before execution.
initializations are not hoisted to the top */

console.log("value of a = " +a)
var a = 20//it will not give any error but the result will be undefined as var was even used before ES6 was introduced so hoiting can be done with this
//which means it will execute but the value of a will be unknown

//with let and const (ES6) this is not possible