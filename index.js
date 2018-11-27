var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    todoRoutes  = require("./routes/todos"),
    PORT        = process.ENV || 8081;


//App Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res){
    res.send("index.html");
});

app.use("/api/todos", todoRoutes);

app.listen(PORT, function(){
    console.log("Todo App is Listening!!");
});

//Start the MongoDB environment
//"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath "C:\Users\Holly\Documents\Alpha Code\React\fullstack_todo_app\data"


//Start MongoDB
//"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"

//npm install -g nodemon
// nodemon index.js
