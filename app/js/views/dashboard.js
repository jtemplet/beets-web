var Backbone = require('backbone');
var $ = require('jquery');
var dashboardTemplate = require('../templates/dashboard.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function(){
        console.log('dashboardView::initialize()');
    },

    render: function(){
        console.log('dashboardView::render()');

        $('#wrapper').append(dashboardTemplate());

        return this;
    }
});
