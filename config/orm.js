var connection = require('./connection.js');

// object relational mapper (ORM)
/*Find all parties, ordering them by party cost
Find parties by the name of the party
Find the client with the most parties
BONUS: create a function within your ORM that will let the user add more clients and parties to the database. */
//select * from parties order by party_cost;

/*In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
These are the methods you will need to use in order to retrieve and store data in your database.

selectAll()
insertOne()
updateOne()
Export the ORM object in module.exports. */

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
		// e.g. INSERT INTO burgers (burger_name) VALUES ('junior burger')
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
		
	updateOne: function (table, col, val, condition, cb) {
		// e.g. UPDATE burgers SET devoured=[true|false] WHERE id=8
		var queryString = 'UPDATE ' + table + ' SET ' + col + '=' + val;
		queryString += ' WHERE ' + condition;;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

};

module.exports = orm;
