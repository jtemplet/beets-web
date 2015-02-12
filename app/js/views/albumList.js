var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/albumList.hbs');
var AlbumView = require('./album');
var _ = require('lodash');
var moment = require('moment');
Backbone.$ = $;

var AlbumCollection = require('../collections/albums');

module.exports = Backbone.View.extend({

  initialize: function(){
    console.log('albumList::initialize()');
    var self = this;
    this.collection = new AlbumCollection();

    this.collection.bind('reset', function () {
      self.render();
    });
    this.collection.fetch({ reset: true });  // Causing backbone error
  },

  render: function(eventName){
    console.log('albumList::render()');

    // writes the table template to the DOM
    $('#dashboard-content').html(template());

    // Adds all the rows of songs to the table
    var av;
    if (Array.isArray(this.collection.models) && !_.isEmpty(this.collection.models) &&
      this.collection.models[0] && this.collection.models[0].attributes) {
      console.log('Non-Empty collection, rendering collection');
      this.collection.models = this.collection.models[0].attributes.albums;
      _.each(this.collection.models, function (album) {
        //var profileTemplate = this.template(profile.toJSON());
        //$(this.el).append(profileTemplate);
        album.added_formatted = moment(new Date(album.added * 1000)).format('YYYY-MM-DD h:mm a');
        av = new AlbumView({model: album});
      }, this);
    }
    return this;
  }
});

