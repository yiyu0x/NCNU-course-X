const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/ncnu', {useNewUrlParser: true});
const db = mongoose.connection;
const classSchema = mongoose.Schema({
    class: String,
    course_cname: String,
    course_credit: String,
    cousre_id: String,
    department: String,
    division: String,
    faculty: String,
    location: String,
    teacher: String,
    time: String
});
const Class = mongoose.model('class', classSchema);
//initialize : delete all data
// Class.deleteMany({}, function (err, res) {
	// if (err) console.log(err);
	// else console.log('[Delete]', res);
// });
//
// var data = new Class(info); 
// data.save(function (err, res) {
// 	if (err) console.error(err);
// 	console.log(res)
// 	db.close();
// }); 

function abc() {
    console.log()
}
module.exports = {
    db,
    Class
};
