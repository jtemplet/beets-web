var Backbone = require('backbone');

module.export = Backbone.Model.extend({

        url: '/artist',

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
