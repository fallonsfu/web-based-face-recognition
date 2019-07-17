const Clarifai = require('clarifai');

// Clarifai face detection API
const app = new Clarifai.App({
 apiKey: 'd6e15d4e43714d9eb0e69c09b04a4c9a'
});

const handleApiCall = (req, res) => {
	// Clarifai face detection API
	app.models
		.predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
		.then(data => {
			res.json(data)
		})
		.catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	  .increment('entries', 1)
	  .returning('entries')
	  .then(entries => {
	  	res.json(entries[0]);
	  })
	  .catch(err => res.status(400).json('unable to get entries'));
}

module.exports = {
	handleImage,
	handleApiCall
}