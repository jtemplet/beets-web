var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
var SongView = require('./song');
Backbone.$ = $;

module.exports = Backbone.View.extend({

  collection: arrSongs,

  tagName: 'tbody',

  initialize: function(){
    console.log('songList::initialize()')
    this.render();
  },

  render: function(){
    console.log('render songList');
    $('#page-wrapper').append(template());

    var sv;
    arrSongs.forEach(function(song) {
      sv = new SongView({ model: song });
    }, this);
    return this;
  }
});

var arrSongs = [
  { title: 'The Suburbs', artist: 'Arcade Fire', album: 'The Suburbs' },
  { title: 'Ready To Start', artist: 'Arcade Fire', album: 'The Suburbs' },
  { title: 'Modern Man', artist: 'Arcade Fire', album: 'The Suburbs' },
  { title: 'Rococo', artist: 'Arcade Fire', album: 'The Suburbs' },
  { title: 'Empty Room', artist: 'Arcade Fire', album: 'The Suburbs' },
  { title: 'Joan of Arc', artist: 'Arcade Fire', album: 'Reflektor' },
  { title: 'Afterlife', artist: 'Arcade Fire', album: 'Reflektor' },
  { title: 'Supersymmetry', artist: 'Arcade Fire', album: 'Reflektor' },
  { title: 'Reflektor', artist: 'Arcade Fire', album: 'Reflektor' },
  { title: 'Gimme Something Good', artist: 'Ryan Adams', album: 'Ryan Adams' },
  { title: 'Kim', artist: 'Ryan Adams', album: 'Ryan Adams' },
  { title: 'Trouble', artist: 'Ryan Adams', album: 'Ryan Adams' },
  { title: 'Shadows', artist: 'Ryan Adams', album: 'Ryan Adams' },
  { title: 'Stay With Me', artist: 'Ryan Adams', album: 'Ryan Adams' }
];

