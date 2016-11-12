var connection = require('./connection.js');

// object relational mapper (ORM)
/*In the orm.js file,we are creating the methods that will execute the necessary MySQL commands in the controllers. 
These are the methods we will need to use in order to retrieve and store data in your database.*/

var orm = {
	// this function is for selecting all the rows in burgers table
	//here tableInput is table name
	selectAll: function (tableInput,cb) {
		var queryString = 'SELECT * FROM ' + tableInput ;
		connection.query(queryString,function (err, result) {
			//console.log(result);
			if (err) throw err;
			cb(result);
		});
	},
	//here we are adding a new row into burger table
	// table:table name,cols:column headings,vals:values for columns(rows)
	insertOne: function (table, col, val, cb) {
		var queryString = 'INSERT INTO ' + table;
		queryString = queryString + ' (';
		queryString = queryString + col;
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES ( ? )';
	
		connection.query(queryString, [val], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	//when devoured is true we will use UPDATE query
	updateOne: function (table, col, val, condition, cb) {
		var queryString = 'UPDATE ' + table + ' SET ' + col + '=' + val;
		queryString += ' WHERE ' + condition;;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

};

module.exports = orm;
