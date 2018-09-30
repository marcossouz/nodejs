var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 	'handlebars');


app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.render('home');
	// res.type('text/pain');
	// res.send('MeadowLark Travel');
});

app.get('/about', function(req, res){
	res.render('about');
	// res.type('text/plain');
	// res.send('About MeadowLark Travel');
});

//custon 404 page
app.use(function(req, res){
	// res.type('text/plain');
	res.status(404);
	// res.send('404 - Not found');
	res.render('404');
});

//custon 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	// res.type('text/plain');
	res.status(500);
	// res.send('500 - Server Error');
	res.render('500');
});

app.use(express.static('public'));

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
		app.get('port') + ';press Ctrl + C to terminate');
});