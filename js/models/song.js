var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    url: '/item',

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
