var Backbone = require('backbone');
var $ = require('jquery');
var recentEventsTemplate = require('../templates/recentEvents.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize: function(){
    console.log('recentEvents::initialize()');
  },

  render: function(){
    console.log('recentEventsView::render()');
    $('#dashboard-content').html(recentEventsTemplate());
    return this;
  }
});
