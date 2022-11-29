var http = require('http')

http.createServer((req,res) => {
    res.write("welcome to routing demo")//this is displayed on webpage
    res.end()

    res.writeHead(200,{'content-type':'text/html'})//this states that we are working with the html file and this is always constant and never changes
    var url = req.url
    if(url == '/about')
    {
        res.write("this is about page")
        res.end()
    }
    else if(url == '/coursedetails')
    {
        res.write('u are in course details')
        res.end()
    }
    else
    {
        res.write('nothing')
        res.end()
    }

}).listen(8080,() => {console.log("server is running")})//this is displayed in the terminal