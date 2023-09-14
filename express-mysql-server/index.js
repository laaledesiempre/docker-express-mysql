"use strict";
exports.__esModule = true;
var express = require("express");
var mysql = require("mysql");
var cors = require("cors")

// Constants
var app = express();
var PORT = 3000;
app.use(cors({
  origin: "*",
  methods: ["GET","PUT","POST","DELETE"]
}))
// Data Base Conection

var db = mysql.createPool({
  host: "192.168.69.10",
  user: "root",
  password: "test",
  database: "test"
});
//------------------
// Functions
var defaultResponseDatabase = function(err, result, res) {
  if (err) {
    res.sendStatus(500);
  }
  else {
    res.sendStatus(200);
    console.log(result);
  }
};
// End of functions
//------------------
// Database constructor
(function() {
  db.query('CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))', function(err, _result) {
    if (err) {
      console.log(err);
    }
  });
})();
//------------------
//Endpoints
app.get("/test", function(_req, res) {
  res.send("Hi from here");
});
// Adding Characters Endpoint
app.post("/api/character", function(req, res) {
  var _a = req.body, name = _a.name, age = _a.age, description = _a.description;
  db.query('INSERT INTO characters (name, age, description) values (? , ? , ?)', [name, age, description], function(err, result) { return defaultResponseDatabase(err, result, res); });
});
// Updating Characters Endpoint
app.put("/api/character", function(req, res) {
  var _a = req.body, id = _a.id, name = _a.name, age = _a.age, description = _a.description;
  db.query('UPDATE characters SET name = ?, age = ?, description = ? WHERE id = ?', [name, age, description, id], function(err, result) { return defaultResponseDatabase(err, result, res); });
});
// Delete Character Endpoint
app["delete"]("/api/character", function(req, res) {
  var id = req.body.id;
  db.query('delete * from characters where id=?', [id], function(err, result) { return defaultResponseDatabase(err, result, res); });
});
// Getting Single Character Data Endpoint
app.get("/api/character/id/:id", function(req, res) {
  var id = req.params.id;
  db.query('select * from characters where id=?', [id], function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result);
    }
  });
});
// Get All
app.get("/api/characters", function(_req, res) {
  db.query('select * from characters', function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result);
    }
  });
});
//------------------
// App Listen
app.listen(PORT, function() {
  console.log("Server on port ".concat(PORT));
});
