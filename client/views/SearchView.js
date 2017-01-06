var SearchView = Backbone.View.extend({

  tagName: 'form',

  events: {
    'submit': function() {
      console.log('SUBMITTED!');
      this.model.search = $('#searchbar').val();
      console.log(this.model.search);
      this.model.submit();
    }
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.attr('name', 'search-bar').attr('onsubmit', 'return false').html('<input type="text" id="searchbar" placeholder="Search..." name="searchBar"><input type="submit" value="Search">');
  }

});