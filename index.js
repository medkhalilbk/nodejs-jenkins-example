var express = require('express');
var app = express();
var port = 3001
app.get('/test', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/mpdam', function (req, res) {
    res.send('{ "response": "welcome to our api test in presentation " }');
});
app.post('/postMPDAM', function (req, res) {
    res.status(403).send({ data: "Auth Needed" });
});
if (process.env.NODE_ENV == 'test') {
    console.log(port)
    app.listen(port);
}else{
    app.listen(process.env.PORT || 3000); 
}
module.exports = app;