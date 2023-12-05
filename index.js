var express = require('express');
var app = express();
app.get('/test', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/mpdam', function (req, res) {
    res.send('{ "response": "welcome to our api test in presentation " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;