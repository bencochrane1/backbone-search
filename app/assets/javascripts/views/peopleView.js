var App = App || {};

App.PeopleView = Backbone.View.extend({

  events: {
    'keyup .search_input': 'search',
    // 'click li': 'fillSearch',
  },

  renderCollection: function(data) {
    this.$el.find("ul").html("");

    data.each(function(person) {
      var personView = new App.PersonView({ model: person });
      this.$el.find("ul").append(personView.render().el);
    }, this);
  },

  render: function() {

    this.$el.html(JST['app']());

    this.renderCollection(this.collection);

    return this;
  },

  search: function() {
    var searchText = this.$el.find("input").val();

    if (searchText === "") {
      this.renderCollection(this.collection);
    } else {
      this.renderCollection(
        this.collection.filterBySearch(searchText)
      );
    }
  }

});








