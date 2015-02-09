//var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var AppView = require('../views/app');
//var SongView = require('../views/song');
var SongListView = require('../views/songList');
//var ArtistView = require('../views/artist');
//var AlbumView = require('../views/artist');

var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');

var router = Backbone.Router.extend({

  routes: {
    "":                 "dashboard"
  },

  initialize: function () {
    console.log('router::initialize()');
    this.appView = new AppView(this);
  },

  dashboard: function () {
    console.log('router::dashboard()');
    // Since the home view never changes, we instantiate it and render it only once
    //if (!this.dashboardView) {
    //  this.dashboardView = new DashboardView();
    //  this.dashboardView.render();
    //} else {
    //  console.log('reusing home view');
    //  //this.dashboardView.delegateEvents(); // delegate events when the view is recycled
    //}
    //this.$content.html(directory.homelView.el);
    //directory.appView.selectMenuItem('home-menu');
  },

  artistList: function() {
    console.log('router::artistList()');
  },

  artistDetails: function (id) {
    console.log('router::artistDetails()');
    var artist = new Artist({id: id});
    var self = this;
    artist.fetch({
      success: function (data) {
        console.log(data);
      }
    });
  },

  albumList: function() {
    console.log('router::albumList()');
  },

  albumDetails: function (id) {
    console.log('router::albumDetails()');
    var album = new Album({id: id});
    var self = this;
    album.fetch({
      success: function (data) {
        console.log(data);
      }
    });
  },

  songList: function () {
    console.log('router::songList()');
    if (!this.songListView) {
      this.songListView = new SongListView();
      this.songListView.render();
    } else {
      console.log('reusing songList view');
      this.songListView.render();
      //this.dashboardView.delegateEvents(); // delegate events when the view is recycled
    }
  },

  songDetails: function (id) {
    console.log('router::songDetails()');
    var song = new Song({id: id});
    var self = this;
    song.fetch({
      success: function (data) {
        console.log(data);
      }
    });
  }

});
module.exports = router;
