var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    todoRoutes  = require("./routes/todos");


//App Config
app.use("/api/todos", todoRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res){
    res.send("index.html");
});

app.listen(3000, function(){
    console.log("Todo App is Listening!!");
});

//Start the MongoDB environment
//"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --dbpath "C:\Users\Mike\Documents\Alpha-Code\Adv WebDev\SPA Todo App\data"


//Start MongoDB
//"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"

//npm install -g nodemon
// nodemon index.js
