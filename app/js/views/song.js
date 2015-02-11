var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/song.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  el: $('tr'),

  template: template('songTemplate'),

  initialize: function(){
    //console.log('song::initialize()');
    this.render();
  },

  render: function(){
    $('#dataTableBody').append(template(this.model));
    //console.log('song: ' + JSON.stringify(this.model));
    return this;
  }
});
