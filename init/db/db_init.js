
const {db, Class} = require('./db_config');
var fs = require("fs");
var path = require('path');
const file_path = path.join(__dirname, '../', 'data', 'course_data.json');
var content = fs.readFileSync(file_path, function (err, data) {
	var data = JSON.parse(data)
	console.log(data)

	var data = new Class(info); 
	data.save(function (err, res) {
		if (err) console.error(err);
		console.log(res)
		// db.close();
	}); 
});
// console.log(content)



// var info = {
	// class: '666s'
// };

