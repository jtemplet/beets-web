var Backbone = require('backbone');
var PageableCollection = require('backbone-pageable');
var Song = require('../models/song');

module.exports = Backbone.PageableCollection.extend({
  // Reference to this collection's model.
  model: Song,

  url: '../../../test/data/songs.json',
  /*    url: '/item', */

  state: {
    pageSize: 15
  },

  parse: function (response) {
    return response.items;
  },

  mode: 'client', /* page entirely on the client side */

  // Filter down the list of all todo items that are finished.
  completed: function () {
    console.log('songs::collections::completed()');
    return this.where({completed: true});
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function () {
    console.log('songs::collections::remaining()');
    return this.where({completed: false});
  },

  // We keep the Todos in sequential order, despite being saved by unordered
  // GUID in the database. This generates the next order number for new items.
  nextOrder: function () {
    return this.length ? this.last().get('order') + 1 : 1;
  },

  // Todos are sorted by their original insertion order.
  comparator: 'order'
});
