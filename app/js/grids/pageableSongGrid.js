var Backgrid = require('backgrid');
var pageableSongs = require('../collections/songs');

var columns = [
  {
    name: 'artist', // The key of the model attribute
    label: 'Artist', // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: 'string' // This is converted to 'StringCell' and a corresponding class in the Backgrid package namespace is looked up
  }, {
    name: 'album',
    label: 'Album',
    editable: false,
    // The cell type can be a reference of a Backgrid.Cell subclass, any Backgrid.Cell subclass instances like *id* above, or a string
    cell: 'string' // This is converted to 'StringCell' and a corresponding class in the Backgrid package namespace is looked up
  }, {
    name: 'title',
    label: 'Title',
    editable: false,
    cell: 'string'
  }, {
    name: 'year',
    label: 'Year Released',
    editable: false,
    cell: 'string'
  }, {
    name: 'added',
    label: 'Date Added',
    editable: false,
    cell: 'date'
  }
];

module.exports = function(pageableCollection) {
  return (new Backgrid.Grid({
    columns: columns,
    collection: pageableCollection
  }));
};
