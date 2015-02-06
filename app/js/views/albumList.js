var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/albumList.hbs');
var AlbumView = require('./album');
var _ = require('lodash');
Backbone.$ = $;

var AlbumCollection = require('../collections/albums');

module.exports = Backbone.View.extend({

  tagName: '#dataTableBody',

  initialize: function(){
    console.log('albumList::initialize()');
    var self = this;
    this.collection = new AlbumCollection();

    this.collection.bind('reset', function () {
      self.render();
    });
    //this.collection.fetch({ reset: true });  // Causing backbone error
  },

  render: function(eventName){
    console.log('albumList::render()');

    // writes the table template to the DOM
    $('#dashboard-content').html(template());

    // Adds all the rows of songs to the table
    //var av;
    //if (this.collection.models[0] && this.collection.models[0].attributes)
    //  this.collection.models = this.collection.models[0].attributes.items;
    //_.each(this.collection.models, function(album){
    //  //var profileTemplate = this.template(profile.toJSON());
    //  //$(this.el).append(profileTemplate);
    //  av = new AlbumView({ model: album });
    //}, this);

    return this;
  }
});

