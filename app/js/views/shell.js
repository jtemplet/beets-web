var Backbone = require('backbone');
var $ = require('jquery');
var shellTemplate = require('../templates/shell.hbs');
var topBarTemplate = require('../templates/top-bar-nav.hbs');
var sidebarTemplate = require('../templates/sidebar.hbs');
Backbone.$ = $;

var SongCollection = require('../collections/songs');
var SongListView = require('../views/songList');
var AlbumListView = require('../views/albumList');

module.exports = Backbone.View.extend({

  el: $("body"),   /* This is crucial  */

  initialize: function(router){
    console.log('shellView::initialize()');
    var self = this;
    this.router = router;

     // ***    KEEP    ***

    this.songCollection = new SongCollection();
    this.songListView = new SongListView({
       collection: this.songCollection
    });

    // When songs have been successfully grabbed, display them using songListView template
    this.songCollection.bind('reset', function () {
       self.songListView.render();
    });
    this.songCollection.fetch({ reset: true });

    this.render();
  },

  events: {
    "click a#artistsLink": "viewArtists",
    "click a#albumsLink": "viewAlbums",
    "click a#songsLink": "viewSongs"
  },

  render: function(){
    $('#wrapper').html(shellTemplate());
    $('#_shell').append(topBarTemplate());
    $('#_shell').append(sidebarTemplate());
    //$('#wrapper').append("<div id='page-wrapper'></div>");
    //this.$el.html(template());
    console.log('rendered shell template');
    return this;
  },

  viewArtists: function(e) {
    e.preventDefault();
    console.log('****** shell::viewArtists *****');

    e.stopPropagation();
  },
  viewAlbums: function(e) {
    e.preventDefault();
    console.log('****** shell::viewAlbums *****');

    e.stopPropagation();
  },
  viewSongs: function(e) {
    e.preventDefault();
    console.log('****** shell::viewSongs *****');

    e.stopPropagation();

  }

});
