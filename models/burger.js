/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (col, val, condition, cb) {
		orm.updateOne('burgers', col, val, condition, function (res) {
			cb(res);
		});
	}
	
};

module.exports = burger;
