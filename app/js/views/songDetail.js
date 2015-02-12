var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songDetail.hbs');
var _ = require('lodash');
var Song = require('../models/song');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#songDetail',

  initialize: function(songId){
    var self = this;
    console.log('songDetailView::initialize(' + songId + ')');

    this.songModel = new Song({id: songId});
    this.songModel.on('change', this.render, this);
    this.songModel.fetch();
  },

  render: function(){
     console.log('songDetail:render()');
     $('.page-header').text('Song Detail');
     $('#dashboard-content').html(template(this.songModel.attributes));

    // iterate over all the properties in the song, append a <li> element to the $el element

    return this;
  }
});
