var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/recentEvents.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize: function(){
    console.log('recentEventsView::initialize()');
  },

  render: function(){
    console.log('recentEventsView::render()');
    $('#dashboard-content').html(template());
    return this;
  }
});
