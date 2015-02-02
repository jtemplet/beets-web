var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
var SongView = require('./song');
var _ = require('lodash');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: 'tbody',

  initialize: function(){
    console.log('songList::initialize()');

    this.render();
  },

  render: function(eventName){
    console.log('songList::render()');

    // writes the table template to the DOM
    $('#page-wrapper').append(template());

    // Adds all the rows of songs to the table
    var sv;
    if (this.collection.models[0] && this.collection.models[0].attributes)
      this.collection.models = this.collection.models[0].attributes.items;
    _.each(this.collection.models, function(song){
          //var profileTemplate = this.template(profile.toJSON());
          //$(this.el).append(profileTemplate);
          sv = new SongView({ model: song });
    }, this);

    return this;
  }
});


