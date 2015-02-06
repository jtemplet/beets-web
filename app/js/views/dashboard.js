var Backbone = require('backbone');
var $ = require('jquery');
var dashboardTemplate = require('../templates/dashboard.hbs');
var RecentsViewTemplate = require('../views/recentEventsView');
var DashboardView = require('../views/dashboard');
Backbone.$ = $;
var currentView;

module.exports = Backbone.View.extend({

    initialize: function(){
        console.log('dashboardView::initialize()');
        var self = this;

        currentView = new RecentsViewTemplate();

    },

    render: function(view){
        console.log('dashboardView::render()')

        $('#wrapper').append(dashboardTemplate());

        if (view) currentView = view;
        currentView.render();

        //this.$el.html(template());
        return this;
    }
});
