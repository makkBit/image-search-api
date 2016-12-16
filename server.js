const express = require('express');
const app = express();

const pug = require('pug');
app.set('views','./views');
app.set('view engine','pug');

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:8000/images';




MongoClient.connect(url, (err, db) => {

	if (err)
		throw err;
	else
		console.log('connection to mongodb established.');

	app.get('/', (req, res) =>{

		res.render('index');

	});

	app.listen(8080, ()=>{
		console.log('app listening on port 8080');
	});


});