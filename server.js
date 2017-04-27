/**
 * Created by penlymeng on 4/26/17.
 */


var express = require('express')

var app = express()

var port = 3000;


var middleware = {
    requireAuthentication : function (req,res,next) {
        console.log("Private route hit...!")
        next()
    },
    logger:function (req,res,next) {
        console.log("Rquest date: "+new Date().toString()+" ,method: " + req.method +" ,Original URL: " + req.originalUrl)
        next()
    }
}

app.use(middleware.logger)

app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('Hello My name is Penlymeng. I love NEne Jang.')
})

app.use(express.static(__dirname + "/public"))



app.listen(port,function () {
    console.log("Express Server Started...! at port: " +  port)
})