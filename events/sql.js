

module.exports = async message => {


	
	if(message.content == "tsd"){
		message.reply("No"); 

		var mysql = require('mysql');

		var con = mysql.createConnection({
		  host: "localhost",
		  user: "yourusername",
		  password: "yourpassword"
		});
		
		con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  con.query("CREATE DATABASE mydb", function (err, result) {
			if (err) throw err;
			console.log("Database created");
		  });
		});
		

	}

}

//module.exports = async message => {
