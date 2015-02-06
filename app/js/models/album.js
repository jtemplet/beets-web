var Backbone = require('backbone');

module.export = Backbone.Model.extend({

/*        url: '/album',      */

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });


/***********************************************

        Properties via beets/library.py

         'id':      types.PRIMARY_ID,
        'artpath': PathType(),
        'added':   DateType(),

        'albumartist':        types.STRING,
        'albumartist_sort':   types.STRING,
        'albumartist_credit': types.STRING,
        'album':              types.STRING,
        'genre':              types.STRING,
        'year':               types.PaddedInt(4),
        'month':              types.PaddedInt(2),
        'day':                types.PaddedInt(2),
        'tracktotal':         types.PaddedInt(2),
        'disctotal':          types.PaddedInt(2),
        'comp':               types.BOOLEAN,
        'mb_albumid':         types.STRING,
        'mb_albumartistid':   types.STRING,
        'albumtype':          types.STRING,
        'label':              types.STRING,
        'mb_releasegroupid':  types.STRING,
        'asin':               types.STRING,
        'catalognum':         types.STRING,
        'script':             types.STRING,
        'language':           types.STRING,
        'country':            types.STRING,
        'albumstatus':        types.STRING,
        'albumdisambig':      types.STRING,
        'rg_album_gain':      types.NULL_FLOAT,
        'rg_album_peak':      types.NULL_FLOAT,
        'original_year':      types.PaddedInt(4),
        'original_month':     types.PaddedInt(2),
        'original_day':       types.PaddedInt(2)

**********************************************/
