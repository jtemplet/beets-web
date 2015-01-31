var Backbone = require('backbone');
var $ = require('jquery');
var template = require('../templates/songList.hbs');
Backbone.$ = $;

module.exports = Backbone.View.extend({


  initialize: function(){
    console.log('songList::initialize()')
    this.render();
    //this.collection.on('reset', this.render, this);
  },

  render: function(){
    $('#page-wrapper').append(template());
    console.log('render songList');
    console.log(arrSongs);
    //this.$el.html(template(arrSongs));
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

