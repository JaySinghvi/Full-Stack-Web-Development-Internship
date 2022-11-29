//code for reading the ejs file and these codes have to blindly followed always..it never changes

const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const app = express()

var port = 8080

app.set('views', path.join(__dirname))
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get("/", (req,res) => {
    res.render("reqform")
})

app.post('/saveData', (req,res) =>{
    console.log('first name from body parser = ', req.body.jay)//upon submitting the name and email on webpage we get the details printed in the terminal
    console.log('email from body parser = ', req.body.email)
})

app.listen(port,()=> {
    console.log('server is running on port',port)
})