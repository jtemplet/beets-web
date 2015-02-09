var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/artistList.hbs');
var ArtistView = require('./artist');
var _ = require('lodash');
Backbone.$ = $;

var ArtistCollection = require('../collections/artists');

module.exports = Backbone.View.extend({

  tagName: '#dataTableBody',

  initialize: function(){
    console.log('artistListView::init()');
    var self = this;
    this.collection = new ArtistCollection();

    this.collection.bind('reset', function () {
      self.render();
    });

    this.collection.fetch({ reset: true });
  },

  render: function() {
    console.log('artistListView::render()');

    // writes the table template to the DOM
    $('#dashboard-content').html(template());

    var av;
    if (Array.isArray(this.collection.models) && !_.isEmpty(this.collection.models) &&
      this.collection.models[0] && this.collection.models[0].attributes) {
      this.collection.models = this.collection.models[0].attributes.artist_names;
      _.each(this.collection.models, function (artist) {
        //var profileTemplate = this.template(profile.toJSON());
        //$(this.el).append(profileTemplate);
        av = new ArtistView({model: artist});
      }, this);
    }
/*
    if (Array.isArray(this.collection.models) && !_.isEmpty(this.collection.models) &&
        this.collection.models[0] &&
        this.collection.models[0].attributes)
      this.collection.models = this.collection.models[0].attributes.artists;
    _.each(this.collection.models, function(artist){
      //var profileTemplate = this.template(profile.toJSON());
      //$(this.el).append(profileTemplate);
      av = new ArtistView({ model: artist });
    }, this);
*/
    return this;
  }
});
