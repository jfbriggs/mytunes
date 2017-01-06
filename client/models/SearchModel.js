var SearchModel = Backbone.Model.extend({
  
  initialize: function() {
    this.search = '';
  },

  submit: function() {
    this.trigger('submit', this);
    console.log('submit was triggered!');
  }

});