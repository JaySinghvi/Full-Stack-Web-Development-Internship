/*in case of an error a script dies and so to prevent the error from stopping the flow of script JS provides exception handling
there are 3 types of error:
1. syntax
2. logical
3. runtime*/

const a =20
console.log("a = " +a)//syntax error

const b = 30
try{
console.display("b = " +b)//runtime error as display is not a function so it stops the flow of script so to prevent it from doing so 
                          //we use try function along with catch
}
catch(e){//e is the argument for error
    console.log("error is: " +e.message)//this is used to display the error as text message without interrupting flow of script
}//if there was no error in try block then catch block will not be executed
finally{
    console.log("final block executed")
}
//even though the above one has error it will still execute the final block and display c = 40

const c = 40
console.log("c = " +c)