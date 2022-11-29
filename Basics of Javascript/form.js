
//validation for name field
function formvalidation(){
    var x = document.forms["Sign up form"]["name"].value//this is like a 2D array and ".value" is used to access the value(which is the name)
    //here first we give access to the form and then we ["provide the name of the form"]and then ["which item of the form wants to be accessed"]
    
    let value = "form data is submitted" 

    var isValiddata = true//this is like flag variable in c program

    //to check if the user has entered the correct format
    if(x == "")//this is to check if the user has provided string in name field
    {
        alert("Name is mandatory")
        isValiddata = false
    }

    //validation for phone number field
    var phone = document.forms["Sign up form"]["phoneno."].value
    if(phone == "" || isNaN(phone))//this is a or conditions and "isNaN" means is not a phone no...
    //so here 2 conditions are checked whether there is input from user and second that whether it is a phone no. or not
    {
        if(phone == "")
        {
            alert("Enter phone no.")
            isValiddata = false
        }
        else
        {
            alert("phone no. should be numerial")
            isValiddata = false
        }
    }

    if(isValiddata)
    {
        alert("Congrats "+x+ ",your " +value)
    }
    else
    {
        alert("fill data again")
    }
}
// this is same like a c program 