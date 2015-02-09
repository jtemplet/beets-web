var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
var SongView = require('./song');
var _ = require('lodash');
Backbone.$ = $;

var SongCollection = require('../collections/songs');

module.exports = Backbone.View.extend({

  tagName: '#dataTableBody',

  initialize: function(){
    console.log('songListView::initialize()');
    var self = this;
    this.collection = new SongCollection();

    this.collection.bind('reset', function () {
      self.render();
    });
    this.collection.fetch({ reset: true });
  },

  render: function(eventName){
    console.log('songList::render()');

    // writes the table template to the DOM
    $('#dashboard-content').html(template());

    // Adds all the rows of songs to the table
    var sv;
    if (Array.isArray(this.collection.models) && !_.isEmpty(this.collection.models) &&
        this.collection.models[0] && this.collection.models[0].attributes) {
      console.log('Non-Empty collection, rendering collection');
      this.collection.models = this.collection.models[0].attributes.items;
      _.each(this.collection.models, function (song) {
        //var profileTemplate = this.template(profile.toJSON());
        //$(this.el).append(profileTemplate);
        sv = new SongView({model: song});
      }, this);
    } /*else if (_.isEmpty(this.collection.models)) {
      console.log('Empty collection, fetching...');
      this.collection.fetch({ reset: true });
    } */
    return this;
  }
});

