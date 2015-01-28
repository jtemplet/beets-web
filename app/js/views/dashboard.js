var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/dashboard.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({
    initialize: function(){
        console.log('dashboardView::initialize()')
        this.render();
    },

    render: function(){
        $('#page-wrapper').html(template());
        //this.$el.html(template());
        return this;
    }
});
