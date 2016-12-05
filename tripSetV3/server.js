var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));

//var db = mongoose(); //return mongoose.connect(config.mongoUri);

app.use(express.static('./public'));

//var foundMap = '';
//var theMethod ='';
//
//var firstD = '';
//var secondD = '';
//
//var departing = '';
//var returning = '';

app.get('/', function(req, res){
	res.render('index.html',{
        title: 'tripSET V.3'
    });
        
});

//app.get('/time', function(req, res){
//	res.render('time.ejs',{
//        title: 'tripSET'
//    });
//        
//});
//
//app.get('/searchmapdirection', function(req, res){
//	res.render('searchmapDirection.ejs', {
//		firstD: firstD,
//		secondD: secondD,
//		theMethod: theMethod
//	});
//});




//app.get('/datePicker',function(req,res){
//
//
//})

//app.post('/datePicker',function(req,res){
//    departing = req.body.searchmapfrom;
//    returning = req.body.searchmapfrom;
//})


//app.post('/searchmapdirection', function(req, res){
//	firstD = req.body.searchmapfrom;
//	secondD = req.body.searchmapto;
//	theMethod = req.body.themethod;
//	res.redirect('/searchmapdirection')
//});


//module.exports = app;

//app.listen(3000, function(req, res){
//	console.log("Server is running at http://localhost:3000");
//});


app.listen(3000);
console.log('Server is running at http://localhost:3000');