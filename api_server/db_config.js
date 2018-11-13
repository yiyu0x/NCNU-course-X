const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/ncnu', {useNewUrlParser: true});
const db = mongoose.connection;
const Schema = new mongoose.Schema({});
const Mongo = mongoose.model('Mongo', Schema, 'class');
//Mongo.find({}, function (err, data) {
//	console.log(data)
//});

const fields = {
	_id: 0,
	course_cname: 1,
	course_credit: 1,
	cousre_id: 1,
	department: 1,
	division: 1,
	faculty: 1,
	location: 1,
	teacher: 1,
	time: 1
};

module.exports = {
	Mongo,
	fields
}