var express = require('express');
var firebase = require('firebase');
var app = express();

/* 이미지 파일, css file, js file 가져올 수 있음 */ 

app.use(express.static('public'));
app.use(express.static('files'));

app.use('/static', express.static('public'));

app.get('/aaa', function(req, res, next){

});

firebase.initializeApp({
  apiKey: "APIkey",
  authDomain: "Everytalent.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://everytalent-b6951.firebaseio.com/", // Realtime Database
  messagingSenderId: "everytalent-b6951"
})

app.use('/data',function(req,res){

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

