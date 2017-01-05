// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add enqueue', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log(e);
    }, this);

    this.on('ended', function(e) {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(e) {
      if (this.length > 0) {
        this.remove(e);
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});