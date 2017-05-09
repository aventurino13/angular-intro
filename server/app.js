//requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');

//modules
var index = require('./modules/index');

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { exteneded: true} ) );
app.use( bodyParser.json( ) );

//globals
var items = [];

//routes
app.use('/', index);

app.get('/getItems', function( req, res ){
  res.send(items);
});

app.post('/addItem', function( req, res ){
  console.log(req.body);
  items.push(req.body);
  res.send( 200 );
});

//globals
var port = process.env.PORT || 3456;

//spin up server
app.listen( port, function(){
  console.log('server up on:', port);
});
