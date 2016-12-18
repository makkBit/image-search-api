module.exports = function(app){

	app.get('/', (req, res) =>{
		res.render('index');
	});

	app.get('/:anyInvalidParameter', (req, res) => {
		res.json({
			'error': 'invalid api request, please read readme file'
		});
	});

};