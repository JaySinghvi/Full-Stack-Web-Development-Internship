/* data modeling helps relaize certain imp facets of app which can't be done without proper and optimized dat models which are:
1. stability: collection and data entities based on current and future demand
2. cpapcity: creating optimally sized docs reducing redundant data in each doc
3. consistency: helps in reducing redundant data and understand relationships
4. needs: diff apps have diff demands fom db
5. performance

2 approaches: 
1. Top-down
2. botton-up

all theory available on site*/

/*the data will go from frontend(react.js) to backend(node.js) to mongodb, so to connect backend to mongodb we use mongodb libraries
named mongodb and mongos*/

const express = require('express')
const MongoClient = require('mongodb').MongoClient

const port = 3300

const app = express()
const mongourl = 'mongodb://localhost:27017'

MongoClient.connect(mongourl,(error,client) => {
    app.listen(port,()=> {
        console.log('server is running', port)
    }
    
    )
})