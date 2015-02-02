var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/dashboard.hbs');
var SongCollection = require('../collections/songs');
var SongListView = require('../views/songList');
Backbone.$ = $;

module.exports = Backbone.View.extend({

    initialize: function(){
        console.log('dashboardView::initialize()');
        var self = this;
        this.songCollection = new SongCollection();
        var slv = new SongListView({
            collection: this.songCollection
        });

        // When songs have been successfully grabbed, display them using songListView template
        this.songCollection.bind('reset', function () {
            slv.render();
        });
        this.songCollection.fetch({ reset: true });
    },

    render: function(){
        console.log('dashboardView::render()')

        $('#wrapper').append(template());

        //this.$el.html(template());
        return this;
    }
});
