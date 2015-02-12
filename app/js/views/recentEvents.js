var Backbone = require('backbone');
var $ = require('jquery');
var eventTemplate = require('../templates/recentEvent.hbs');
var template = require('../templates/recentEvents.hbs');

Backbone.$ = $;

module.exports = Backbone.View.extend({

  el: $('body'),   /* This is crucial  */

  initialize: function(){
    console.log('recentEventsView::initialize()');
  },

  events: {
    "click a#recentEventsLink": "viewRecentEvents"
  },

  render: function(){
    console.log('recentEventsView::render()');
    $('.page-header').text('Recent Events');
    $('#dashboard-content').html(template());

    // Get all the events
    //$('.timeline').html(eventTemplate());
    return this;
  },

  viewRecentEvents: function(e) {
    e.preventDefault();
    console.log('****** REV::viewREV *****');
    e.stopPropagation();

    this.render();
  }
});
