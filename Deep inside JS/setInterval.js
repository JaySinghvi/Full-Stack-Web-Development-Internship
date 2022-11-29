//another method of acheiving asynchronous behaviour

function greet(phrase,name){
    console.log(`${phrase} ${name}`)
}

setInterval(greet,5000,"hello","john");//this takes in function name,timer,phrase,name
