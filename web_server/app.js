const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));


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

app.get('/', function (req, res) {
    var html = fs.readFileSync(
        path.resolve(__dirname, '../dist/index.html'),
        'utf-8'
    );
    res.send(html);
});

app.listen(8066, () => {
    console.log(':web => http://127.0.0.1:8066');
});