var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/song.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  tagName: '#dataTableBody',

  template: template('songTemplate'),

  initialize: function(){
    //console.log('song::initialize()');
    this.render();
  },

  events: {
   'click' : 'showAlert'

  },

  showAlert: function(){
      alert("You clicked me");
      console.log('song::event')
  },

  render: function(){
    $('#dataTableBody').append(template(this.model));
    //this.$el.append(template(this.model));
    //console.log('song: ' + JSON.stringify(this.model));
    return this;
  }
});
