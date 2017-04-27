/**
 * Created by penlymeng on 4/26/17.
 */


var express = require('express')

var app = express()

var port = process.env.PORT || 3000;

var middleware = require('./middleware')


app.use(middleware.logger)

app.get('/about',middleware.requireAuthentication,function (req,res) {
    res.send('Hello My name is Penlymeng. I love NEne Jang <3. ')
})

app.use(express.static(__dirname + "/public"))



app.listen(port,function () {
    console.log("Express Server Started...! at port: " +  port)
})