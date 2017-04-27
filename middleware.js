/**
 * Created by penlymeng on 4/27/17.
 */


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

module.exports = middleware