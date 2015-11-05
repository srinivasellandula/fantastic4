var http = require('http'),
    fs = require('fs'),
    path = require('path') ,
    express = require('express'),
    path = require('path');

var application = express(); 
application.use("/public", express.static(path.join(__dirname, 'public')));
var Router = require('node-simple-router')
var router = Router();

var server = http.createServer(router);
server.listen(5555); 
console.log('Server is running on port 5555');

router.get("/", function ( request, response ) {
fs.readFile('index.html', function (err, html) {
     if (err) {
         throw err;
     }
     response.write(html); 
     response.end();  
    });

});

router.get("/forgotPassword",function (request , response) {
    fs.readFile("forgotPassword.html",function ( err , html ){
        if (err) {
            throw err;
        }
        response.write( html );
        response.end();
    });

 });

router.post('/validateForm',function ( req , res){
   fs.readFile('home.html', function (err, html) {
     if (err) {
         throw err;
     }
     res.write(html); 
     res.end();  
    });
});