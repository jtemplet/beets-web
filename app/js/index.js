//var ShellView = require('./views/shell');
//
//var shellView = new ShellView();
var Backbone = require('backbone');
var Router = require('./routers/router');

var router = new Router();
Backbone.history.start();
//router.navigate('', {trigger: true});
