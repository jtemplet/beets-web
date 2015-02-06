var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/albumList.hbs');
var AlbumView = require('./album');
var _ = require('lodash');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#dataTableBody',

  initialize: function(){
    console.log('albumList::initialize()');

    this.render();
  },

  render: function(eventName){
    console.log('albumList::render()');

    // writes the table template to the DOM
    $('#page-wrapper').append(template());

    // Adds all the rows of songs to the table
    var sv;
    if (this.collection.models[0] && this.collection.models[0].attributes)
      this.collection.models = this.collection.models[0].attributes.items;
    _.each(this.collection.models, function(album){
      //var profileTemplate = this.template(profile.toJSON());
      //$(this.el).append(profileTemplate);
      av = new AlbumView({ model: album });
    }, this);

    return this;
  }
});


