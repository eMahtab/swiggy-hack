var express=require('express');
var bodyParser=require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app=express();

var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','awesome'));
var session = driver.session();



app.get('/', function(req,res) {
    session.run('MATCH (n:Restaurant) RETURN n')
           .then(function(result){
           	 //console.log("All result "+ JSON.stringify(result))
           	  /*result.records.forEach(function(record){
           	  	console.log(JSON.stringify(record._fields[0]))
           	  	res.status(200).send(JSON.stringify(record._fields[0]))
           	  })*/
           	  res.status(200).send(result.records);
           })
           .catch(function(err){
           	console.log("Error "+err);
           })
});


var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});