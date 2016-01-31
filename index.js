var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port);

var bodyParser = require("body-parser");

var pg = require("pg");
var conString = process.env.DATABASE_URL || "postgres://localhost:5432/jonathan";

app.use(bodyParser.json());

app.get("/search",query_creater,db_search,end);

// Creates a query and gives it to db_search

function query_creater(req,res,next){
  var search_query = 'SELECT frage, antwort, falsch_1, falsch_2, falsch_3 FROM ' + req.query.subject + ' WHERE kategorie=' + req.query.kategorie + ' ORDER BY RANDOM() LIMIT 1';
  next(search_query);
}

// Ends response

function end(req,res){
  res.end;
}

/* Executes a query in the DB and sends the first
   returned row as a JSON response */

function db_search(qry,req,res,next){
  pg.connect(conString, function(err, client, done) {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query(qry,function(err, result) {
      done();
      if(err) {
        return console.error('error running query', err);
      }

      res.json(result.rows[0]);
    });
  });
  next();
}
