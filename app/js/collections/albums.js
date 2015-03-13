var Backbone = require('backbone');
var PageableCollection = require('backbone-pageable');
var Album = require('../models/album');

module.exports = Backbone.PageableCollection.extend({
  // Reference to this collection's model.
  model: Album,

/*  url: '../../../test/data/albums.json',  */
  url: '/album',

  state: {
    pageSize: 15
  },

  parse: function (response) {
    return response.albums;
  },

  mode: 'client', /* page entirely on the client side */

  // Filter down the list of all todo items that are finished.
  completed: function () {
    return this.where({completed: true});
  },

  // Filter down the list to only todo items that are still not finished.
  remaining: function () {
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
