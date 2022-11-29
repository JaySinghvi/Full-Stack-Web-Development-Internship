/* dictionary is a collection of key/value pairs. In JS, there is no dictionary type.however we can store key value pairs as an object
dictionary can be created by initializing an object:
1. var dict = new object()  
2. var dict ={} (shorthand way)

dictionary can be initialized with key/value pairs when creating it using shorthand way:
var dict ={first name: "Jay",
            one: "1",
            1: "some value"}
            */

var fruits = new Object();
console.log(typeof(fruits))//type is object

fruits.name = "orange"
fruits.color = "orange"
fruits.price = 50
console.log(fruits)

//using shorthand way
const veggies = {
    veggie1 : "beans",
    veggie2 : "raddish",
    veggie3 : "tomato"
}
console.log(typeof(veggies))
console.log(veggies)

console.log(veggies.veggie1)//to print a single value

//to know the keys of the object veggies
console.log("keys for veggies: " +Object.keys(veggies))
//keys for the fruits object
console.log("keys of the fruits: " +Object.keys(fruits))

