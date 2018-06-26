var mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/27017');

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");//brings in the todo.js file with the schema