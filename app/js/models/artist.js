var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  urlRoot: '/artist/',

  initialize: function() {
  },

  defaults: {
  },

  validate: function(attrs, options) {
  },

  parse: function(response, options)  {
    return response;
  }
});
