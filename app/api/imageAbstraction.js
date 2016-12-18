module.exports = function(app, db){

	//node-bing-api
	var Bing = require('node-bing-api')({ accKey: "4377d73a1aa34084abb87155ada87ec2" });


	app.get('/imagesearch/latest', (req, res) => {

		console.log();
		let allImgQuery = db.collection('allImgQuery');
		console.log('inside /latest');
		allImgQuery.find().limit(10).sort({'when':-1}).toArray(function(err, documents){
			if (err) throw err;
			console.log(documents);
			res.send(documents);
		});

	});



	//image search 
	app.get('/imagesearch/:img', (req,res) => {

		let allImgQuery = db.collection('allImgQuery');
		console.log('inside /:img');
		//new document
		let doc = {
			'term': req.params.img,
			'when': new Date()
		};

		//inserts new document in allImgQuery collection
		allImgQuery.insert(doc, function(err, data){
			if(err) throw err;
			console.log('doc inserted: '+data);
			allImgQuery.find().toArray(function(err, documents){
				console.log(documents);
			});
		});

		let offset = req.query.offset || 10;

		//returns json response using bing image search api
		Bing.images(req.params.img, {
				top: offset,  
			}, function(error, bingRes, body){
				res.send(body.value.map(filterOut));
		});
	});


	//filters all unwanted properties from the body.value array json
	function filterOut(image){
		return {
			"image_url": image.contentUrl,
			"alt_text": image.name,
			"page_url": image.hostPageUrl
		};
	};


	



};