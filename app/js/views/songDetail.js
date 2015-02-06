var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songDetail.hbs');
var _ = require('lodash');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#songDetail',

  initialize: function(){
    console.log('songDetail::initialize()');
  },

  render: function(eventName){
     $('#page-wrapper').html(template());

    // iterate over all the properties in the song, append a <li> element to the $el element

    return this;
  }
});