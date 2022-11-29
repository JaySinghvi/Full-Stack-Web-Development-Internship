//regular expression is used to search something inside something other..like searching for full in full stack

//searching
let text = "fullstack web dev 2.0"
let i = text.search("web")
console.log(i)

i = text.search(/dev/i)//this way is called as pattern match and i is for case sensitive searches
console.log(i)

//searching and replacing
let newtext = text.replace("fullstack web", "database")
console.log("replaced txt = " +newtext)

let regreplacedtxt = text.replace(/fullstack web/i, "database")//using pattern search
console.log("replaced txt using pattern search = " +regreplacedtxt)

//search for set of characters
let charmatch = text.match(/[l,e,t]/g)//as there are many characters so we use [](array form) and g means searching in the whole string/ global search
console.log("char match = " +charmatch)

//search for numbers
let nummatch = text.match(/[0-3]/g)//here instead of char in array we put number range in array
console.log("num match = " +nummatch)

//alternative match
let alt = "orange, mago, apple, banana"
let altmatch = alt.match(/grapes|apple/g)//here we use or operation (|) to check if either of the fruits are present or not 
console.log("alt match =" +altmatch)

//meta characters:used to print all the num/char without giving a range 
let numMatch = text.match(/\d/g)// \d is used to represent the integers so if there is any num occurence print it
console.log("num Match using meta = " +numMatch)

let spacematch = text.match(/\s/g)// \s is used to print all the spaces between the words
console.log("spces between words = " +spacematch)

let text2 = "hello, look at you"
let result = text2.search(/\blo/g)// \blo used to print the first occurence of "lo" in the string...\bll is used to print the occurece of ll in the string
console.log("first occurence of lo = " +result)

let atleatone = text2.match(/lo+/g)//this is used to find atleast one occurence of lo in the string
console.log("atleast one occurence = " +atleatone)

let zerooneoccur = text2.match(/lo*/g)//used to find 0 or 1 occurence of lo
console.log("0 or 1 occurence of lo = " +zerooneoccur)

let zerooccur = text2.match(/lo?/g)//same as above one
console.log("0 occurence = " +zerooccur)
