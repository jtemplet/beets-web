//var _ = require('underscore');
var Backbone = require('backbone');
var $ = require('jquery');
var ShellView = require('../views/shell');
var SongView = require('../views/song');
var ArtistView = require('../views/artist');
var AlbumView = require('../views/artist');
var DashboardView = require('../views/dashboard');
var Artist = require('../models/artist');
var Album = require('../models/album');
var Song = require('../models/song');

var router = Backbone.Router.extend({

  routes: {
    "":                 "dashboard",
    "artists/:id":      "artistDetails",
    "albums/:id":       "albumDetails",
    "songs":            "songList",
    "songs/:id":        "songDetails"
  },

  initialize: function () {
    console.log('router::initialize()');
    this.shellView = new ShellView();
  },

  dashboard: function () {
    console.log('router::home()');
    // Since the home view never changes, we instantiate it and render it only once
    if (!this.dashboardView) {
      this.dashboardView = new DashboardView();
      this.dashboardView.render();
    } else {
      console.log('reusing home view');
      this.dashboardView.delegateEvents(); // delegate events when the view is recycled
    }
    //this.$content.html(directory.homelView.el);
    //directory.shellView.selectMenuItem('home-menu');
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
