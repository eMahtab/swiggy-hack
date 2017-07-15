var express=require('express');
var bodyParser=require('body-parser');
var neo4j = require('neo4j-driver').v1;

var app=express();
app.use(express.static('public'));

var driver = neo4j.driver('bolt://localhost',neo4j.auth.basic('neo4j','awesome'));
var session = driver.session();



/*app.get('/', function(req,res) {
    session.run('MATCH (n:Restaurant) RETURN n')
           .then(function(result){
           	 
           	  result.records.forEach(function(record){
           	  	console.log(JSON.stringify(record._fields[0]))
           	  	res.status(200).send(JSON.stringify(record._fields[0]))
           	  })
           	  res.status(200).send(result.records);
           })
           .catch(function(err){
           	console.log("Error "+err);
           })
});
*/

app.get('/city/:name/areas',function(req,res){	
	session.run('MATCH (n:Location) RETURN n')
           .then(function(result){
           	 
           	  /*result.records.forEach(function(record){
           	  	console.log(JSON.stringify(record._fields[0]))
           	  	res.status(200).send(JSON.stringify(record._fields[0]))
           	  })*/
           	  res.status(200).send(result.records);
           })
           .catch(function(err){
           	console.log("Error "+err);
           })
})


app.get('/city/:name/area/:areaName',function(req,res){
	 console.log("Area name "+req.params.areaName+" looking for "+req.query.search);
	 session.run(' MATCH (area:Location{location:"'+req.params.areaName+'"})  '+
	 	         ' MATCH (area)-[:at]->(k:Restaurant) ' +
	 	         ' MATCH (k) -[:serves]-> (item:'+req.query.search+') return k,item')
           .then(function(result){
           	 
           	 /* result.records.forEach(function(record){
           	  	console.log(JSON.stringify(record._fields[0]))
           	  	res.status(200).send(JSON.stringify(record._fields[0]))
           	  })*/
           	  res.status(200).send(result.records);
           })
           .catch(function(err){
           	console.log("Error "+err);
           })
})

app.get('/',function(req,res){
	res.sendFile('index.html',{ root: __dirname });
})


var port = process.env.PORT || 8080;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});