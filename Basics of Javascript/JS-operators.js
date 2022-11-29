/*JS operators:-
1. Arithmetic operators: +,-,*,/, ++(increment), --(decrement), %(mod)
2. Assignment operators: =, +=, -=, *=, /=, %= (first increment/decrement/multiply/divide/mod the number then assign)
3. Comparison operators: <,>,<=,>=,==, !=, !== (=== and !== compares the value along with their datatypes)
4. Logical operators: and(&&), not(!), or(||)

** when checking 20 == "20" -> this will be true as it only check the values and not the type
but when checking for 20 === "20" -> this will give false as it also checks for the type which is different (number and string)**

In JS variable is declared like:
var a = 20

console means the msg displayed in the terminal*/

console.log("this is js operator demo")//displays data in the console

var a = 10;

var b = 20;

var c = a + b;

console.log("a = " + a + " b = " + b + " c = " + c);

var d = a > b;

console.log("d = " + d);

x = 10; y = 20;

var z = (x == 10) && (y == 20);

console.log("value of z = " + !z); //here we have used not operator which turns true to false

m = 20; n = "20";

p = m !== n;

console.log("p = " + p);

k = 20;
k %= 10;
console.log("k = " + k);
