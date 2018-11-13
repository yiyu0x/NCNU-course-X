const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost/ncnu', {useNewUrlParser: true});
const db = mongoose.connection;
const Schema = new mongoose.Schema({});
const Mongo = mongoose.model('Mongo', Schema, 'class');
Mongo.find({}, function (err, data) {
	console.log(data)
});