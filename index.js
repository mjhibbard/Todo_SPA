var express = require("express"),
    app     = express(),
    bodyParser  = require("body-parser"),
    port    = process.env.PORT || 3000;

app.get("/", function (){
    res.send("Hello and welcome.");
});

app.listen(port, function(){
    console.log("Todo App is Listening!!");
});