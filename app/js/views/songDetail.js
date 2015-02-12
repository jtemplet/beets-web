var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songDetail.hbs');
var _ = require('lodash');
var Song = require('../models/song');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#songDetail',

  initialize: function(songId){
    console.log('songDetailView::initialize(' + songId + ')');

    this.songModel = new Song();
    this.render();
  },

  render: function(){
     $('#dashboard-content').html(template());

    // iterate over all the properties in the song, append a <li> element to the $el element

    return this;
  }
});
