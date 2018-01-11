var express = require('express');
var router = express.Router();
var sequelize = require('../models/models.js');

router.get('/createDatabase', function(req, res, next) {
	sequelize.sync({force : true})
		.then(() => res.status(201).send('created tables'))
		.catch((err) => {
			console.warn(err)
			res.status(500).send('DB creation failed!')
		})
});

module.exports = router;