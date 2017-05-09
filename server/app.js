//requires
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser');

//modules
var index = require('./modules/index');

//uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { exteneded: true} ) );

//routes
app.use('/', index);

//globals
var port = process.env.PORT || 3456;

//spin up server
app.listen( port, function(){
  console.log('server up on:', port);
});
