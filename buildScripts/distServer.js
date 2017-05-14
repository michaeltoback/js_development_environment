/**
 * not for actual production use, this is configured so we can confirm locally the production build works
 */
import express from "express";
import path from "path";
import open from "open";
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

// add support for gzip compression	
app.use(compression());

// support for serving static files
app.use(express.static('dist'));

app.get('/users', function(req, res){
	// hard coding for simplicity, pretend this hits a real database
	res.json([
		{"id": 1,"firstName": "Bob","lastName": "Smith", "email": "bob@gmail.com"},
		{"id": 2,"firstName": "Tammy","lastName": "Norton", "email": "tnorton@yahoo.com"},
		{"id": 3,"firstName": "Tina","lastName": "Lee", "email": "tlee@hotmail.com"}
	]);
});

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(port, function(err){
	if(err){
		console.log(err);
	} else{
		open('http://localhost:' + port);
	}
});