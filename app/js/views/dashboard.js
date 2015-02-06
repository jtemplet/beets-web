var Backbone = require('backbone');
var $ = require('jquery');
var dashboardTemplate = require('../templates/dashboard.hbs');
var RecentsViewTemplate = require('../views/recentEventsView');
Backbone.$ = $;
var currentView;

module.exports = Backbone.View.extend({

    initialize: function(){
        console.log('dashboardView::initialize()');
        var self = this;

        this.currentView = new RecentsViewTemplate();
    },

    render: function(view){
        console.log('dashboardView::render()');

        $('#wrapper').append(dashboardTemplate());

        if (view) {
          console.log('Going to use view passed to it ' + view);
          this.currentView = view;
        }
        this.currentView.render();

        //this.$el.html(template());
        return this;
    }
});
