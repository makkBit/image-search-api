///express
const express = require('express');
const app = express();

//serve-favicon
var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/favicon.ico'));

//pug(jade)
const pug = require('pug');
app.set('views','./views');
app.set('view engine','pug');

//mongodb
const MongoClient = require('mongodb').MongoClient;

//custom js files
const routes = require('./app/routes/index.js');
const api = require('./app/api/imageAbstraction.js');


const port = process.env.PORT || 8080;

const url = process.env.MONGOLAB_URI || 'mongodb://localhost:8000';

console.log(url);


MongoClient.connect(url, (err, db) => {

	if (err)
		throw err;
	else
		console.log('connection to mongodb established.');

	routes(app);
	api(app, db);

	app.listen(port, ()=>{
		console.log('app listening on port: '+port);
	});

});