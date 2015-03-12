var Backbone = require('backbone');
var $ = require('jquery');

var AlbumView = require('./album');
var _ = require('lodash');
var moment = require('moment');
var BackgridPaginator = require('../../../lib/backgrid-paginator');
var BackgridFilter = require('../../../lib/backgrid-filter');
var BackgridSelectAll = require('../../../lib/backgrid-select-all');
var PageableAlbumCollection = require('../collections/albums');

Backbone.$ = $;

module.exports = Backbone.View.extend({

  initialize: function(){
    console.log('albumList::initialize()');
    var self = this;
    self.pageableAlbumCollection = new PageableAlbumCollection();
    self.pageableAlbumGrid = require('../grids/pageableAlbumGrid')(self.pageableAlbumCollection);

    self.paginator = new BackgridPaginator.Paginator({
      collection: self.pageableAlbumCollection
    });

    // Initialize a client-side filter to filter on the client
    // mode pageable collection's cache.
    self.filter = new BackgridFilter.ClientSideFilter({
      collection: self.pageableAlbumCollection,
      fields: ['albumartist', 'album', 'label', 'genre']
    });
  },

  render: function(){
    console.log('albumList::render()');
    $('.page-header').text('Album List');

    var $content = $('#dashboard-content');

    // Render the filter
    //$content.before(this.filter.render().el);
    $content.html(this.filter.render().el);

    $content.append(this.pageableAlbumGrid.render().el);

    // Render the paginator
    $content.append(this.paginator.render().el);



    // Add some space to the filter and move it to the right
    $(this.filter.el).css({float: 'right', margin: '15px'});
    // Fetch some data
    this.pageableAlbumCollection.fetch({reset: true});

    return this;
  }
});

