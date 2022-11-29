//string is a array of characters

//eg :
var str1 = "edureka";
console.log(str1)

console.log("type of str = " +typeof(str1))// this is string type..everything in js is object so string is also an object type

console.log("length = " +str1.length)

console.log("charAt 5 = " +str1.charAt(5))//charAt operaotor is used to find the element present in the nth index so in 
                                 //edureka at 5th index/position the element is k and it starts from 0(e),1(d),2(u),3(r),4(e),5(k),6(a)
var str2 = "full stack dev"
var str3 = str1.concat(" ")//first we add some space after the str1 and assign it to str3
var str3 = str3.concat(str2)//then we join str3(which contains str1 with some space after it) and str 2 together
//another way of adding space after str 1 is by directly adding space after edureka in str 1 and then doing var str3 = str1.concat(str2)
console.log(str3)

//this split function is used to split the words from wherever we want.
//in this case the argument provided in the split is "space" so wherever there is a space in str3 it will be replaced by comma and separated
var splittedstr = str3.split(" ")
console.log("splitted str = " +splittedstr)

//to extact the word "full" from whole str3 we use slice method where we provide starting index and end index
var slicedstr = str3.slice(8,12)
console.log("sliced str = " +slicedstr)