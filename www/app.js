
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'handlebars');
  app.set( 'view options', {layout: false});
  app.register( '.html', require( 'handlebars' ) );
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

console.log(routes.index);
console.log(routes.post);

app.get('/*', routes.index);
app.get('/post', routes.post);

app.listen(80);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
