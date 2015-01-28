var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('songList::initialize()')
    this.render();
  },

  render: function(){
    $('#page-wrapper').html(template());
    console.log('render songList')
    //this.$el.html(template());
    return this;
  }
});
