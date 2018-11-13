
const axios = require('axios');
const fs = require('fs');
var path = require('path');
const parser = require('xml2json');

const url = 'https://api.ncnu.edu.tw/API/get.aspx?xml=course_ncnu&year=107&semester=1&unitId=all';
const file_path = path.join(__dirname, 'course_data.json');
axios.get(url).then(function(response){
	// console.log(response.data); // ex.: { user: 'Your User'}
	const xml = response.data;
	const json = parser.toJson(xml);
	fs.writeFile(file_path, json, function (err) {
    	if (err)
        	console.log('[Error]', err);
    	else
        	console.log('[Successful]');
	});
}); 