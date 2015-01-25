var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/shell.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('shellView::initialize()')
    this.render();
  },

  render: function(){
    $('body').prepend(template());
    //this.$el.html(template());
    return this;
  }
});
