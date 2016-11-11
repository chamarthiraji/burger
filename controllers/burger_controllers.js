/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');



router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post('/create', function (req, res) {
	console.log("req.body.burger_name",req.body.burgerName);
	burger.insertOne('burger_name', req.body.burgerName, function () {

		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	//console.log('condition', condition);

	burger.updateOne('devoured', req.body.devoured, condition, function () {
		res.redirect('/burgers');
	});
});
// If no matching route is found default to home
router.use('/', function (req, res) {
	res.redirect('/burgers');
});

module.exports = router;
