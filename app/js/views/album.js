var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/album.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#body',

  template: template('albumTemplate'),

  initialize: function(){
    //console.log('song::initialize()');
    this.render();
  },

  events: {
    'click' : 'showAlert'

  },

  showAlert: function(){
    alert("You clicked me");
    console.log('song::event');
  },

  render: function(){
    $('#dataTableBody').append(template(this.model));
    //console.log('song: ' + JSON.stringify(this.model));
    return this;
  }
});
