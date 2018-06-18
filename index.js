var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    todoRoutes  = require("./routes/todos");


//App Config
app.use("/api/todos", todoRoutes);
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.send("Hello and welcome.");
});

app.listen(3000, function(){
    console.log("Todo App is Listening!!");
});

//Start the MongoDB environment
//"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "C:\Users\Mike\Documents\Alpha-Code\Adv WebDev\SPA Todo App\data"


//Start MongoDB
//"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"