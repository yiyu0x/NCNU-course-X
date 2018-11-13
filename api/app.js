const {Mongo, fields} = require('./db_config');
const express = require('express');
const app = express();

//CORS fixed
app.all('*', function (req, res, next) {
    // console.log('debug: ', req.method)
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header(
        'Access-Control-Allow-Methods',
        'PUT,POST,GET,DELETE,OPTIONS,PATCH'
    );
    res.header('Access-Control-Max-Age', 1728000);
    //post CORS
    next();
});

app.get('/api/', function (req, res) {
	Mongo.find({}, fields, {limit: 100, sort: {cousre_id: 1}}, function (err, doc) {
		if (err) res.status(500).send('API error');
		else res.send(doc);
	});
});

// Mongo.find({}, fields, {sort: {cousre_id: 1}}, function (err, data) {
// 	console.log(data)
// });

app.listen(5487, () => {
    console.log(':web => http://127.0.0.1:5487/api');
});