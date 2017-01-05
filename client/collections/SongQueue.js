// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add enqueue', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log(this.length);
    }, this);


    this.on('ended', function(e) {
      // console.log("songqueue", e);
      this.shift();
      console.log(this.length);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(e) {
      if (this.length > 0) {
        this.remove(e);
      }
      console.log(this.length);
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  }

});