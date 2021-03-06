var express = require('express');
var app = express();
var path = require('path')
app.use(express.static(path.join(__dirname, '/dist/my-page')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/my-page/index.html'));
});

app.listen(process.env.PORT || 8080);