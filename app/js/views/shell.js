var Backbone = require('backbone');
var $ = require('jquery');
var shellTemplate = require('../templates/shell.hbs');
var topBarTemplate = require('../templates/top-bar-nav.hbs');
var sidebarTemplate = require('../templates/sidebar.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('shellView::initialize()')
    this.render();
  },

  render: function(){
    $('#wrapper').html(shellTemplate());
    $('#_shell').append(topBarTemplate());
    $('#_shell').append(sidebarTemplate());
    //$('#wrapper').append("<div id='page-wrapper'></div>");
    //this.$el.html(template());
    console.log('rendered shell template');
    return this;
  }
});
