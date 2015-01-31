var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

    url: '/item',

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


/*

      Properties via beets/library.py

        'id':       types.PRIMARY_ID,
        'path':     PathType(),
        'album_id': types.FOREIGN_ID,

        'title':                types.STRING,
        'artist':               types.STRING,
        'artist_sort':          types.STRING,
        'artist_credit':        types.STRING,
        'album':                types.STRING,
        'albumartist':          types.STRING,
        'albumartist_sort':     types.STRING,
        'albumartist_credit':   types.STRING,
        'genre':                types.STRING,
        'composer':             types.STRING,
        'grouping':             types.STRING,
        'year':                 types.PaddedInt(4),
        'month':                types.PaddedInt(2),
        'day':                  types.PaddedInt(2),
        'track':                types.PaddedInt(2),
        'tracktotal':           types.PaddedInt(2),
        'disc':                 types.PaddedInt(2),
        'disctotal':            types.PaddedInt(2),
        'lyrics':               types.STRING,
        'comments':             types.STRING,
        'bpm':                  types.INTEGER,
        'comp':                 types.BOOLEAN,
        'mb_trackid':           types.STRING,
        'mb_albumid':           types.STRING,
        'mb_artistid':          types.STRING,
        'mb_albumartistid':     types.STRING,
        'albumtype':            types.STRING,
        'label':                types.STRING,
        'acoustid_fingerprint': types.STRING,
        'acoustid_id':          types.STRING,
        'mb_releasegroupid':    types.STRING,
        'asin':                 types.STRING,
        'catalognum':           types.STRING,
        'script':               types.STRING,
        'language':             types.STRING,
        'country':              types.STRING,
        'albumstatus':          types.STRING,
        'media':                types.STRING,
        'albumdisambig':        types.STRING,
        'disctitle':            types.STRING,
        'encoder':              types.STRING,
        'rg_track_gain':        types.NULL_FLOAT,
        'rg_track_peak':        types.NULL_FLOAT,
        'rg_album_gain':        types.NULL_FLOAT,
        'rg_album_peak':        types.NULL_FLOAT,
        'original_year':        types.PaddedInt(4),
        'original_month':       types.PaddedInt(2),
        'original_day':         types.PaddedInt(2),
        'initial_key':          MusicalKey(),

        'length':      types.FLOAT,
        'bitrate':     types.ScaledInt(1000, u'kbps'),
        'format':      types.STRING,
        'samplerate':  types.ScaledInt(1000, u'kHz'),
        'bitdepth':    types.INTEGER,
        'channels':    types.INTEGER,
        'mtime':       DateType(),
        'added':       DateType(),





 */
