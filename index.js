var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port);

var bodyParser = require("body-parser");

var pg = require("pg");
var conString = process.env.DATABASE_URL || "postgres://localhost:5432/jonathan";

app.use(bodyParser.json());

app.get("/search",search_query_creater,database_action,end);

app.post("/new-question",new_question_query_creater,end);


// Creates a query and gives it to db_search

function search_query_creater(req,res,next){
  var search_query = 'SELECT frage, antwort, falsch_1, falsch_2, falsch_3 FROM ' + req.query.subject + ' WHERE kategorie=' + req.query.kategorie + ' ORDER BY RANDOM() LIMIT 1';
  var data = database_action(search_query);
  res.json(data.rows[0]);
}

function table_size_query_creater(req,res,next){
  var table_size_query = "SELECT MAX(id) FROM " + req.body.subject;
  next(table_size_query);
}

function new_question_query_creater(req,res,next){
  var table_size_query = "SELECT MAX(id) FROM " + req.body.subject;
  var id = database_action(table_size_query);
  console.log(id);
  var new_question_query = 'INSERT INTO ' + req.body.subject + /*(id, frage, antwort, falsch_1, falsch_2, falsch_3, creater, kategorie)*/' VALUES(' + 1 + ', ';
  var new_question_query = new_question_query + req.body.frage + ', ' + req.body.antwort + ', ' + req.body.falsch_1 + ', ' + req.body.falsch_2 + ', ' + req.body.falsch_3 + ', ' + req.body.creater + ', ' + req.body.kategorie + ')';
  database_action(new_question_query);
}

// Ends response

function end(req,res){
  res.end;
}

/* Executes a query in the DB and sends the first
   returned row as a JSON response */

/*function query_db(qry,req,res,next){
  console.log(qry);
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("pieper");
    client.query(qry,function(err, result) {
      console.log("Jana");
      done();
      if(err) {
        return console.error('error running query', err);
      }
      query_result = result;
      if(req.method === "GET"){
          res.json(result.rows[0]);
      }

      console.log("hello world");
      console.log(result.rows[0].max);
      query_result = result.rows[0].max;
      console.log(query_result);
    });
  });
  console.log("jonatahn");
  next();
}*/

function database_action(qry,req,res,next){
  var data;
  console.log(qry);
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    console.log("1");
    client.query(qry,function(err, result) {
      console.log("2");
      done();
      if(err) {
        return console.error('error running query', err);
      }
      /*data = result;
      console.log("Data: ")
      console.dir(data);
      console.log(data.rows[0]);
      return data;*/
      res.json(result.rows[0]);
    });
  });
  next();
}
