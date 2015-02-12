var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/albumDetail.hbs');
var _ = require('lodash');
var Album = require('../models/album');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#albumDetail',

  initialize: function(albumId){
    var self = this;
    console.log('albumDetailView::initialize(' + albumId + ')');

    this.albumModel = new Album({id: albumId});
    this.albumModel.on('change', this.render, this);
    this.albumModel.fetch();
  },

  render: function(){
    console.log('albumDetailView:render()');
    $('.page-header').text('Album Detail');
    $('#dashboard-content').html(template(this.albumModel.attributes));

    // iterate over all the properties in the song, append a <li> element to the $el element

    return this;
  }
});
