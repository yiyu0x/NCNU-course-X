const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));



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