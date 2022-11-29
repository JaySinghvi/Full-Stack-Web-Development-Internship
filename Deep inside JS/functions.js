/*functions in JS are of 5 types:
1. regular functions
2. arrow functions
3. function expression
4. IIFE functions: immediately invoked function expression
5. generator functions*/

//regular function
var str1 = "Fullstack web dev"//string provided
var pattern = "l"//letter/word to be found in the string
var result = str1.match(pattern)//match function is used to find a particular word/letter in the string provided 
console.log(result)//printing the result


//ES5 normal function
function add(a,b){
    c = a+b;
    return c
}
var result = add(3,4);
console.log(`result = ${result}`)

//converting above into ES5 into ES6 arrow function
add2 = (a,b) =>  a+b;//if there is more than 1 line of code then write it like {return arguments}/ here it's only 1 argument so no need of { return}
var result2 = add2(3,4);
console.log(`result = ${result2}`)


//ES6 function expressions
sum = function(a,b){//here there is no function name and whole functions is assgined to sum which then acts as a function
    return a+b
}
c = sum(20,30)
console.log(`sum = ${c}`)

//ES6 IIFE functions
const addition = (
    function(){//the function is declared here and is assigned at the same time to a variable called addition
        var str = "fullstack web dev"
        return str
    }
)()//here as soon as it is declared it is immediately called by doing ()
console.log(`addition = ${addition}`)

//generator functions: returns generator object when called and can return multiple values unlike others
function*mygenerator(){//it doesn't executes the function body when called, instead it returns a iterator object
    let i = 0
    for(i = 0; i < 10; i++)
    {
        yield i;//this gives the value
    }
}
const gen = mygenerator()//this is a iterator object
for(i = 0; i < 10; i++)
{
    console.log(gen.next().value)//this is used to call the generator function everytime
//so next() method is used to execute the generators body which returns object with 2 properties value and done which indicates the
// yielded value and whether the generator has yield its last value or not
}

//let(local) and const(global)
var global = 4
const val = 20//when using "const" we have to declare and initialize at the same time 

function scopdemo(){
    let local = 6//if this is present then the value printed will be 6 as it will first consider local value and if it's not there then it will be 4
    console.log(`inside scopdemo and global : ${global}`)
    console.log(`inside scopdemo and local is : ${local}`)
}
scopdemo()

console.log(val)
//console.log(`out of scopdemo and local: ${local}`) this gives error as local is only defined in the function locally
console.log(`out of scopdemo and global: ${global}`) //this will not give error as the variable is declared globally
