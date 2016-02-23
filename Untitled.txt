var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port);

var bodyParser = require("body-parser");

var pg = require("pg");
var conString = process.env.DATABASE_URL || "postgres://localhost:5432/jonathan";

app.use(bodyParser.json());

app.get("/search",search_query_creater,query_db,end);

app.post("/new-question",table_size_query_creater,query_db,new_question_query_creater,query_db,end);

// Creates a query and gives it to db_search

function search_query_creater(req,res,next){
  var search_query = 'SELECT frage, antwort, falsch_1, falsch_2, falsch_3 FROM ' + req.query.subject + ' WHERE kategorie=' + req.query.kategorie + ' ORDER BY RANDOM() LIMIT 1';
  next(search_query);
}

function table_size_query_creater(req,res,next){
  var table_size_query = "SELECT MAX(id) FROM " + res.subject;
  next(table_size_query);
}

function new_question_query_creater(id,req,res,next){
  console.log(id);
  var new_question_query = 'INSERT INTO ' + req.body.subject + '(id, frage, antwort, falsch_1, falsch_2, falsch_3, creater, kategorie) VALUES(';
  var new_question_query =+ req.body.frage + ', ' + req.body.antwort + ', ' + req.body.falsch_1 + ', ' + req.body.falsch_2 + ', ' + req.body.falsch_3 + ', ' + req.body.creater + ', ' + req.body.kategorie + ')';
}

// Ends response

function end(req,res){
  res.end;
}

/* Executes a query in the DB and sends the first
   returned row as a JSON response */

function query_db(qry,req,res,next){
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(qry,function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }
      if(req.method == "GET"){
          res.json(result.rows[0]);
      }
    });
  });
  next(result);
}
