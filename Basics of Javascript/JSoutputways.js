function innerHTMLfunc(para){
    const element = document.getElementById(para);
    element.innerHTML = "I am para and I am modified by inner html output";
}
//here we create a function and remember to put "func" at the end. this function has argument as the id of the para that need to
//be modified so we use document.getElementById(name of id) to access the content of that para and then we write 
//element.innerHTML = "body" to replace this with the para called by id reference

function documentwritefunc(){
    document.write("I am written using document written")
}
/*here we don't need any arguments in and simply susing document write replaces all the text on webpage with the one 
described in document.write*/

function windowalertfunc(){
    window.alert("I am written using window.alert")
}
//here the message of the function will be displayed in another alert box which will not change the text on the webpage

function consolelogfunc(){
    console.log("I am written using console.log")
}
//here the msg will be displayed in the console of the webpage which is accessed using by doing right click on the webapge 
//and then going in inspect and then selecting console 