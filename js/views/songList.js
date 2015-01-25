var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('shellView::initialize()')
    this.render();
  },

  render: function(){
    $('#wrapper').html(template());
    console.log('prepend to wrapper')
    //this.$el.html(template());
    return this;
  }
});
