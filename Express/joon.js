var express = require('express');
var app = express();

/* 이미지 파일, css file, js file 가져올 수 있음 */ 

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

app.get('/aaa', function(req, res, next){

});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/ab?cd', function(a, b, next) {
    next('route')
    b.send('ab?cd');
});

app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});
  
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

app.get(/a/, function(req, res) {
    res.send('/a/');
  });

app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

