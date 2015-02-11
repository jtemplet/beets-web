var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

/*    Templates    */
var shellTemplate = require('../templates/shell.hbs');
var topBarTemplate = require('../templates/top-bar-nav.hbs');
var sidebarTemplate = require('../templates/sidebar.hbs');

/*    Views    */
var DashboardView = require('../views/dashboard');
var SongListView = require('../views/songList');
var SongDetailView = require('../views/songDetail');
var AlbumListView = require('../views/albumList');
var ArtistListView = require('../views/artistList');
var RecentEventsView = require('../views/recentEvents');

/*    Collections    */
//var SongCollection = require('../collections/songs');

module.exports = Backbone.View.extend({

  el: $('body'),   /* This is crucial  */

  initialize: function(router){
    console.log('appView::initialize()');
    var self = this;
    //this.router = router;

    if (!this.dashboardView) {
      this.dashboardView = new DashboardView();
    } else {
      console.log('reusing dashboard view');
      //this.dashboardView.delegateEvents(); // delegate events when the view is recycled
    }

    this.recentEventsView = new RecentEventsView();
    this.render();
  },

  events: {
    "click a#artistsLink": "viewArtists",
    "click a#albumsLink": "viewAlbums",
    "click a#songsLink": "viewSongs",
    "click .song": "viewSong"
  },

  render: function() {
    console.log('-- rendering app view --');
    $('#wrapper').html(shellTemplate());
    $('#_shell').append(topBarTemplate());
    $('#_shell').append(sidebarTemplate());
    //$('#wrapper').append("<div id='page-wrapper'></div>");
    //this.$el.html(template());
    console.log('app::render() - Going to render dashboard template');

    this.dashboardView.render();
    this.recentEventsView.render();
    return this;
  },

  viewSong: function(event) {
    console.log(event.target.parentElement.id);
  },

  viewArtists: function(e) {
    e.preventDefault();
    console.log('****** shell::viewArtists *****');
    e.stopPropagation();

    if (!this.artistListView) {
      this.artistListView = new ArtistListView();
    } else {
      console.log('reusing artist view');
    }
    this.artistListView.render();
  },

  viewAlbums: function(e) {
    e.preventDefault();
    console.log('****** shell::viewAlbums *****');
    e.stopPropagation();
    if (!this.albumListView) {
      this.albumListView = new AlbumListView();
    } else {
      console.log('reusing album view');
    }
    this.albumListView.render();
  },
  viewSongs: function(e) {
    e.preventDefault();
    console.log('****** shell::viewSongs *****');
    e.stopPropagation();
    if (!this.songListView) {

      this.songListView = new SongListView();
    } else {
      console.log('reusing song view');
    }
    this.songListView.render();
  }

});
