var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
//var router = express.Router();
var server = app.listen(port);

var id = [
  {"name" : "deutsch" , "id" : 0},
  {"name" : "mathe", "id" : 0},
  {"name" : "englisch", "id" : 0},
  {"name" : "franzoesisch", "id" : 0},
  {"name" : "spanisch", "id" : 0},
  {"name" : "geschichte", "id" : 0},
  {"name" : "erdkunde", "id" : 0},
  {"name" : "sport", "id" : 0},
  {"name" : "chemie", "id" : 0},
  {"name" : "physik", "id" : 0},
  {"name" : "biologie", "id" : 0},
  {"name" : "bildendekunst", "id" : 0},
  {"name" : "gemeinschaftskunde", "id" : 0},
  {"name" : "musik", "id" : 0}
];

var names = {
  "deutsch" : 0,
  "mathe" : 1,
  "englisch" : 2,
  "franzoesisch" : 3,
  "spanisch" : 4,
  "geschichte" : 5,
  "erdkunde" : 6,
  "sport" : 7,
  "chemie" : 8,
  "physik" : 9,
  "biologie" : 10,
  "bildendekunst" : 11,
  "gemeinschaftskunde" : 12,
  "musik" : 13
};

var bodyParser = require("body-parser");

var pg = require("pg");
var conString = process.env.DATABASE_URL || "postgres://localhost:5432/jonathan";

app.use(bodyParser.json());


function set_id () {
  for(var i = 0;i <= id.length-1;i++){
    var table_size_query = "SELECT MAX(id) FROM " + id[i].name;
    var fake_req = {"path" : "/table_size_query", "i" : i};
    var fake_res = {"id" : -1};
    db_search(table_size_query,fake_req,fake_res,function(req,res){
        id[req.i].id = res.id;
      }
    );
  }
}

set_id();

app.get("/search",search_query_creater,db_search,end);

app.post("/new-question",new_question_query_creater,db_search,end);

// Creates a query and gives it to db_search

function search_query_creater(req,res,next){
  var search_query = 'SELECT frage, antwort, falsch_1, falsch_2, falsch_3 FROM ' + req.query.subject + ' ORDER BY RANDOM() LIMIT 1';

  next(search_query);
}

function new_question_query_creater(req,res,next){
  var curent_id;
  for(var i = 0; i <= id.length-1; i++){
    if(id[i].name == req.body.subject){
      id[i].id++;
      curent_id = id[i].id;
    }
  }
  //(id, frage, antwort, falsch_1, falsch_2, falsch_3, creater, kategorie)
  var new_question_query = "INSERT INTO " + req.body.subject + "(id, frage, antwort, falsch_1, falsch_2, falsch_3, creater, kategorie) VALUES (" + curent_id + ", '";
  new_question_query = new_question_query + req.body.frage + "', '" + req.body.antwort + "', '" + req.body.falsch_1 + "', '" + req.body.falsch_2 + "', '" + req.body.falsch_3 + "', '" + req.body.creater + "', " + req.body.kategorie + ")";
  console.log(new_question_query);
  next(new_question_query);
}

function end(req,res){
  res.end;
}

/* Executes a query in the DB and sends the first
   returned row as a JSON response */

function db_search(qry,req,res,next){

  pg.connect(conString, function connecter_function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(qry,function result_switch(err, result) {
      done();
      if(err) {
        return console.error('error running query', err, qry);
      }
      //console.log(result.rows[0]);
      switch (req.path) {

        case "/search":

          res.json(result.rows[0]);
          next();
          break;

        case "/new-question":

          next();
          break;

        case "/table_size_query":

          res.id = result.rows[0].max
          next(req,res);
          break;

        default:

          next(result.rows[0]);
      }
    });
  });
}
