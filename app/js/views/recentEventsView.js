var Backbone = require('backbone');
var $ = require('jquery');
var recentEventsTemplate = require('../templates/recentEvents.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize: function(){

  },

  render: function(){
    console.log('recentEventsView::render()');
    $('#page-wrapper').append(recentEventsTemplate());
    return this;
  }
});
