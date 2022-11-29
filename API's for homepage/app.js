var express = require ('express')
var app = express()

var port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/node-demo')

var nameSchema = new mongoose.Schema(
    {
        firstName : String,
        lastName : String

    }
)

var User = mongoose.model("User", nameSchema)



app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/addname",(req,res)=> {
    var myData = new User(req.body)
    myData.save().then(item =>{
       return  res.send("name successfully sent to db")
    }
    ).catch(err => {
        return res.status(400).send("unable to save the data to db")

    }
    )
}

)

app.listen(port,()=>{
    console.log('my serving is running on port = ', port)

})
