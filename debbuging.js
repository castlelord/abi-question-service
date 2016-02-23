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

function new_question_query_creater(req,res,next){
  var curent_id;
  debugger;
  console.log(id.length);
  for(var i = 0; i <= id.length-1; i++){
    debugger;
    console.log(id[i].name);
    console.log(i);
    if(id[i].name == req.body.subject){
      id[i].id++;
      curent_id = id[i].id;
      console.log("worked");
      debugger;
    }
    console.log("hell no");
  }
  debugger;
  console.log("left loop");
  console.log("someting");
  var new_question_query = 'INSERT INTO ' + req.body.subject + '(id, frage, antwort, falsch_1, falsch_2, falsch_3, creater, kategorie) VALUES(' + curent_id + ', ';
  new_question_query = new_question_query + req.body.frage + ', ' + req.body.antwort + ', ' + req.body.falsch_1 + ', ' + req.body.falsch_2 + ', ' + req.body.falsch_3 + ', ' + req.body.creater + ', ' + req.body.kategorie + ')';
  console.log(new_question_query);
  console.log("someting");
  debugger;
  next(new_question_query);
}

function returner (a){
  console.log(a);
}

var a = {
  "path" : "/new-question",
  "body" : {"frage":"a","antwort":"b","falsch_1":"c","falsch_2":"d","falsch_3":"e","creater":"f","kategorie":"1","subject":"geschichte"}
};
var b;
new_question_query_creater(a,b,returner);
