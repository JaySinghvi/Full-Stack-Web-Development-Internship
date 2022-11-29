/*this architecture is
model: data
view: frontend
controller: logic

router: url to get to the api endpoint eg: localhost:3000/addname

to create node project type in terminal : npm init
to creating server (express) read from data(body-parser) and to automatic detect changes in server(nodemon): npm i express body-parser nodemo
to create mvc architect: create folders model, controllers and routers

put all the data files in model folder
under routers create file routes.js

create file for starting point of program which is app.js

inside package.json below test write: "start" : "nodemon app.js" to detect chnages in server automatically without need to refresh

to create server using express server type in app.js :
const express = require('express')
const bodyParser = require('body-parser')

to run the server in local host:
const hostname = "localhost";
const port = 3000

const app = express()

to deal with json data we use middle ware functions to read data:
app.use(bodyParser.json())

CORS issue means cross origin resource sharing to interact with 3RD PARTY SERVER:
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')//which server to interact with
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')//with method to interact with
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorizaton')//with header to interact with
    next()    
}
)

to listen to server:
app.listen(port,hostname),()=>{
    console.log(`service is running on port ${port}`)
})

then go to routes and type:
const express = require('express')

then to read the city names from the data we need controller so create a file in controller name city.js and type:
const City = require('../Models/City.json')]

to print cities name from the city.json file and export it
exports.getCityList = (req,res)=>{
    let cities = City.map((city)=>{
        return city.name
    })

    res.status(200).json({message:"Cities fetched success", city: cities})
}

then execute this in terminal type cd../controllers and then node City and it prints all the cities name from the city.json file

then in routes file to import city data from controller type:
var cityController = require('../controllers/City.js)

const router = express.Router()

router.get('/citylist', cityController.getCityList)//this is API point which gets all the cities name from the city.js file

module.exports = router;
then in terminal type cd routes and then node routes

then in app.js file to register the routes type below 2nd line:
const routes = require('../Routes/routes)
then before app.listen type:
app.use('/', routes)





*/