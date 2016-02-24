CREATE TABLE deutsch
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE mathe
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE englisch
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE franzoesisch
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE spanisch
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE geschichte
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE erdkunde
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE sport
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE physik
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE biologie
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE bildendekunst
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE gemeinschaftskunde
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);
CREATE TABLE musik
(
  id int,
  frage text,
  antwort text,
  falsch_1 text,
  falsch_2 text,
  falsch_3 text,
  creater text,
  kategorie int
);





INSERT INTO deutsch VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO mathe VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO englisch VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO franzoesisch VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO spanisch VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO erdkunde VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO sport VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO physik VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO biologie VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO bildendekunst VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO gemeinschaftskunde VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);
INSERT INTO musik VALUES(0,'frage','antwort','falsch','falsch','falsch','jonathan burggraf',0);

INSERT INTO geschichte VALUES(0,'Welches dieser Ziele konnte Konrad Adenauer während seiner Amtszeit nicht durchsetzen?','Wiedervereinigung (BRD-DDR)','Westintegration, Integration des westlichen Systems in die BRD','Souveränität Deutschlands, Pariser Verträge','Wirtschaftlicher Aufschwung','yannik pieper',1);
INSERT INTO geschichte VALUES(1,'In welchen Jahren war Konrad Adenauer Bundeskanzler?','Ludwig Erhard','1949 - 1966','1949 - 1970','1947-1954','yannik pieper',1);
INSERT INTO geschichte VALUES(2,'Wer war der Nachfolger Konrad Adenauers?','1949 - 1963','Kurt Georg Kiesinger','Helmut Schmidt','Helmut Kohl','yannik pieper',1);
INSERT INTO geschichte VALUES(3,'Welche der folgenden Antworten gehört nicht zu den vier Freiheiten von Roosevelt?','Kulturfreiheit','Meinungsfreiheit','Freiheit von Not und Furcht','Glaubensfreiheit','yannik pieper',1);
INSERT INTO geschichte VALUES(4,'Was war keine Forderung des Morgenthau Plans?','Vollständige Isolierung Deutschlands','Zerschlagung des Großgrundbesitzes','Umstrukturierung der Wirtschaft zur Agrarwirtschaft','Demontierung der deutschen Industrie','yannik pieper',1);
INSERT INTO geschichte VALUES(5,'Wann kam das polnische Problem zur Sprache?','Konferenz von Teheran November 1943','Konferenz von Casablanca Januar 1943','Außenministerkonferenz Oktober 1943','erstes Londoner Abkommen September 1944','yannik pieper',1);
INSERT INTO geschichte VALUES(6,'Welcher Vereinigung diente die Atlantik - Charta als Vorlage?','UN','EU','NATO','PETA','yannik pieper',1);
INSERT INTO geschichte VALUES(7,'Welche der vier Besatzungsmächte kam erst später dazu?','Französisch','USA','Großbritannien','Sowjetunion','yannik pieper',1);
INSERT INTO geschichte VALUES(8,'Aus welcher Partei kam Theodor Heuss der erste Bundespräsident der BRD?','FDP','CDU/CSU','SPD','DPD','yannik pieper',1);
INSERT INTO geschichte VALUES(9,'Weswegen war die Entnazifizierung der Bevölkerung in der amerikanischen Besatzungszone wenig erfolgreich?','Durch sogenannte Persilscheine konnte man sich eine unbescholtene politische Vergangenheit erkaufen.','Die Entnazifizierung stieß auf wenig Interesse bei den Amerikanern','Die Fragebögen die man ausfüllen musste waren nicht ausreichend präzise','Das nationalsozialistische Gedankengut war zu stark für ein Umdenken','yannik pieper',1);
INSERT INTO geschichte VALUES(10,'Was war der Grund für den Zusammenschluss der SDP und der KPD zur SED?','DDruck von sowjetischer Seite','ähnliche Parteiprogramme','Um einen größeren Interessenskreis zu vertreten','mangelnde Unterstützung seitens der Wähler in die SPD','yannik pieper',1);
INSERT INTO geschichte VALUES(11,'Was war kein Problem der Vertreibung und Flucht der deutschen nach dem Krieg?','Die Alliierten verhinderten die Einreise der Flüchtenden nach Deutschland','Übergriffe der heimischen Bevölkerung auf deutsch (Rache)','keine Regeln und Konsequenzen für die geforderte humane Überführung der deutschen','Kälte und Hungersnot unter den Flüchtenden','yannik pieper',1);
INSERT INTO geschichte VALUES(12,'Was war keines der Probleme der Trümmergesellschaft in Deutschland?','massive Demontierung in den westlichen Besatzungszonen','kaum Strom und Gas Versorgung','Währungsverfall','verbreiteter Hunger','yannik pieper',1);
