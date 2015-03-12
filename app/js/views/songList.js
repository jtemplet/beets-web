var Backbone = require('backbone');
var $ = require('jquery');

var SongView = require('./song');
var _ = require('lodash');
var moment = require('moment');

var BackgridPaginator = require('../../../lib/backgrid-paginator');
var BackgridFilter = require('../../../lib/backgrid-filter');
var BackgridSelectAll = require('../../../lib/backgrid-select-all');
var PageableSongCollection = require('../collections/songs');

Backbone.$ = $;

module.exports = Backbone.View.extend({

/*  el: $('body'),   /* This is crucial  */

  initialize: function(){
    console.log('songListView::initialize()');
    var self = this;
    self.pageableSongCollection = new PageableSongCollection();
    self.pageableSongGrid = require('../grids/pageableSongGrid')(self.pageableSongCollection);

    self.paginator = new BackgridPaginator.Paginator({
      collection: self.pageableSongCollection
    });

    // Initialize a client-side filter to filter on the client
    // mode pageable collection's cache.
    self.filter = new BackgridFilter.ClientSideFilter({
      collection: self.pageableSongCollection,
      fields: ['artist', 'album', 'title']
    });
  },

  render: function(){
    console.log('songList::render()');
    $('.page-header').text('Song List');

    var $content = $('#dashboard-content');


    // Render the filter
    //$content.before(this.filter.render().el);
    $content.html(this.filter.render().el);

    $content.append(this.pageableSongGrid.render().el);

    // Render the paginator
    $content.append(this.paginator.render().el);


    // Add some space to the filter and move it to the right
    $(this.filter.el).css({float: 'right', margin: '15px'});
    // Fetch some data
    this.pageableSongCollection.fetch({reset: true});

    return this;
  }
});

