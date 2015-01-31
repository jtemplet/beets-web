var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/song.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: 'li',

  initialize: function(){
    console.log('songList::initialize()')
    this.render();
  },

  render: function(){
    //$('#page-wrapper').html(template());
    console.log('render songList')
    this.$el.html(template(this.model));
    return this;
  }
});
