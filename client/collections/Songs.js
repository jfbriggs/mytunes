// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    var context = this;

    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: {'keys': 'url,title,artist'},
      success: function(data) {
        _.each(data.results, function(songData) {
          context.add(new SongModel(songData));
        });
        context.trigger('repopulated');
      },
      error: function() {
        console.log('error');
      }
    });

    this.on('enqueue', function() {
      console.log('SONGS HEARS');
    });
  },

  pullData: function(term) {

    var context = this;

    var dataSpec = term ? {'keys': 'url,title,artist', 'where': '{"title":{"$in":["If Your Girl Only Knew"]}}'} : {'keys': 'url,title,artist'};

    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      data: dataSpec,
      success: function(data) {
        console.log('Got:', data.results);
        context.reset();
        _.each(data.results, function(songData) {
          context.add(new SongModel(songData));
        });
        context.trigger('repopulated');
      },
      error: function() {
        console.log('error');
      }
    });
  }

});