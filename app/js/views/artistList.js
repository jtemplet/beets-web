var Backbone = require('backbone');
var $ = require('jquery');

var ArtistView = require('./artist');
var _ = require('lodash');
Backbone.$ = $;

var BackgridPaginator = require('../../../lib/backgrid-paginator');
var BackgridFilter = require('../../../lib/backgrid-filter');
var BackgridSelectAll = require('../../../lib/backgrid-select-all');

var PageableArtistCollection = require('../collections/artists');

module.exports = Backbone.View.extend({
/*
  tagName: '#dataTableBody',
*/
  initialize: function(){
    console.log('artistListView::init()');
    var self = this;
    self.pageableArtistCollection = new PageableArtistCollection();
    self.pageableArtistGrid = require('../grids/pageableArtistGrid')(self.pageableArtistCollection);

    self.paginator = new BackgridPaginator.Paginator({
      collection: self.pageableArtistCollection
    });

    // Initialize a client-side filter to filter on the client
    // mode pageable collection's cache.
    self.filter = new BackgridFilter.ClientSideFilter({
      collection: self.pageableArtistCollection,
      fields: ['artist']
    });
  },

  render: function() {
    console.log('artistListView::render()');
    $('.page-header').text('Artist List');
    // writes the table template to the DOM
    var $content = $('#dashboard-content');

    // Render the filter
    $content.html(this.filter.render().el);

    $content.append(this.pageableArtistGrid.render().el);

    // Render the paginator
    $content.append(this.paginator.render().el);

    // Add some space to the filter and move it to the right
    $(this.filter.el).css({float: 'right', margin: '15px'});
    // Fetch some data
    this.pageableArtistCollection.fetch({reset: true});

    return this;
  }
});
