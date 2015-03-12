var Backgrid = require('backgrid');
var pageableArtists = require('../collections/artists');

var columns = [
  {
    name: 'artist', // The key of the model attribute
    label: 'Artist', // The name to display in the header
    editable: false, // By default every cell in a column is editable, but *ID* shouldn't be
    // Defines a cell type, and ID is displayed as an integer without the ',' separating 1000s.
    cell: 'string' // This is converted to 'StringCell' and a corresponding class in the Backgrid package namespace is looked up
  }, {
    name: 'count',
    label: 'Song Count',
    editable: false,
    cell: 'integer'
  }
];

module.exports = function(pageableCollection) {
  return (new Backgrid.Grid({
    columns: columns,
    collection: pageableCollection
  }));
};
