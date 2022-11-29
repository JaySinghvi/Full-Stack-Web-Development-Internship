/*it takes function as argument and if it is successfully executed it return value of fulfilled or if it fails then gives rejects
so it has 3 states fulfilled, rejected and pending. it is used to handle asynchronous operations.*/

//promise constructor takes function as argument and function takes takes in 2 arguments and then based on condition the argument is called
var promise = new Promise(
    function(fulfilled,reject){
        const x = "edureka"
        const y = "edure"
        if(x == y)
        {
            fulfilled()
        }
        else
        {
            reject()
        }
    }
)

promise.
then(//called if promise is fulfilled
    function(){
        console.log("success and fulfilled")
    }
).catch(function(){//called if promise is rejected
      console.log("error and rejected")
}
)

