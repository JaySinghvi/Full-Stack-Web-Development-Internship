//declaring a array
var fruits = ["orange", "apple", "mango", "banana"];

console.log(fruits);
console.log(typeof(fruits));//everything in js is  object internally

console.log(fruits.length);//4 as there are 4 types of fruits

/*Some commonly used array methods are:
1. Filter method: only those values which satisfy the condition will be presented in the output
2. Pop method: used to remove an element from the end of the array
3. concat method: used to combine two arrays
4. Slice method: used to extract a particular no. of elements from an array
5. sort method
6. push method: Used to add other elements in an exisiting array at the end of the array
7. find method
8. map method: the size of the array remains the same as the original
9. unshift method: Used when the element to be added should be added at the begining of an exisiting array
10. shift method: used to remove an element from the start of the array
*/

//Filter method
var nums = ["1", "2", "3", "4"];//here nums is the array name which can be different from the name in the function which is num 
function iseven(num){
    return num % 2 == 0;
}
even = nums.filter(iseven);//for every num above it will call the function "iseven" and all the even num will remain in array which will be the ouput 
console.log(even);

//Map method
function addfive(num){
    return num-5;
}
var newarray = nums.map(addfive);
console.log("array = " +newarray);

//Concat method
var veggies = ["tomato", "lady finger", "cabbage", "cauliflower"];
var combinedarray = fruits.concat(veggies);//2 methods to combine 2 arrays but most preferred is this one
//var combinedarray2 = fruits+veggies;
console.log(combinedarray)
//console.log(combinedarray2)

//Push method
console.log("fruits = " +fruits);
fruits.push("pineapple");//Adds at the end of the array
console.log("new fruits array : " +fruits)

//unshift method
console.log("fruits = " +fruits);
fruits.unshift("grapes");//Adds at the begining of the array
console.log("new fruits array : " +fruits)

//Pop method
fruits.pop();
console.log("fruits array after pop: " +fruits)

//shift method
fruits.shift();
console.log("fruits array after shift: "+fruits)

//find method
var ages = [10, 20, 30, 12, 18]
function canvote(ages){
    return ages>18
}
console.log("First Age to vote: " +ages.find(canvote));//it only returns the first value which satisfies the condition and rest of the elements
                                                 //are skipped even if it satisfies the condition

//to print all the qualifying ages we can use filter option
console.log("All Ages to vote: " +ages.filter(canvote));

//Slice method
//for eg. to extract 2 elements from the veggies array
console.log("sliced veggies array: " +veggies.slice(0,2))

//Sort method
console.log("before sorting: "+ages)
ages.sort()
console.log("after sorting: " +ages)


