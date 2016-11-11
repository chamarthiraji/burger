var mysql = require('mysql');

/*var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'ahakra226',
	database: 'burgers_db'
}); */
var localConnection = "mysql://root:ahakra226@localhost:3306/burgers_db";

var dbConnection = process.env.JAWSDB_URL || localConnection;
var connection = mysql.createConnection(dbConnection);



connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;