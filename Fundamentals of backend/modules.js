/*module is a functionality which is organized in a single/multiple JS files and can be reused throughout the node js
3 types:
1. core modules: these are in-built and can be used without installation
2. user-defined modules: these are created by developers which can be reused
3. node package manager: these includes grp of modules/packages developed by other developers and can be used by installing them by going to website of npm node and clicking first link

syntax:
in ES5: var module = require('module_name'): require() function returns object,function,property or other JS type depending on module name
in ES6: import {module} from 'module_name' 

3 types of core modules:
1. OS: provides all the functions
2. FS (file system module): can create, read and write files
3. HTTP: helps to create a server*/

//core modules

//1)OS
var os = require('os')
console.log("platform = " +os.platform())
console.log(`architecture = ${os.arch()}`)
console.log("type = " +os.type())//these all can be found on the npm website
console.log("hostname = " +os.hostname())
console.log("version = " +os.version())
console.log("release = " +os.release())
console.log("home dir = " +os.homedir())

//2)FS
var fs = require('fs')
fs.writeFileSync("FSD.txt", "fullstack web dev")//it creates a file of name fsd and writes full stack web dev in that 

//3)HTTP
var http = require('http')
http.createServer(function(req,res){//create function takes argument as callback function and arguments of callback functions are request and response
    console.log('http server is made')
    res.write('Welcome to http module')//req is used to send data to server and res is used to display a msg to user
    res.end()

}).listen(3000)//type in google, localhost:3000 and as we refresh the console.log will be printed twice

//if we make any changes to res.write statement then we need to kill the current server by cls and then run it again and refresh on google
//so to solve this problem we use baggage called nodemon and we write in console npm i nodemon and it will install it


//to import npm modules go to package.json file and type "npm init -y" in the terminal
/*Package.json is the manifest of many node.js project, which contains all the metadata of a project and the categories of metadata are:
1. identifying metadata: it consists of properties to identify the project such as the name, current version of module, license, author of project,
   description about project

2. functional metadata: consists of functional properties of the project such as entry point of the module, dependencies in the project, scripts,
    repo links*/




