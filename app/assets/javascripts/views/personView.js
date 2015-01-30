var App = App || {};

App.PersonView = Backbone.View.extend({
  tagName: 'li',

  events: {
    'click button': 'deletePerson',
    'dblclick' : 'renderForm', 
    'submit form' : 'updatePerson'  
  },

  render: function() {
    this.$el.html(JST['person'](this.model.toJSON()));

    return this;
  },

  deletePerson: function(event) {
    event.stopPropagation();

    this.$el.fadeOut();
    this.model.destroy();
  },

  renderForm: function(event) {
    this.$el.html(JST['form'](
      this.model.toJSON()
    ));
  },

  updatePerson: function(event) {
    event.preventDefault();

    this.model.save({
      first_name: this.$el.find(".first_name").val(),
      last_name: this.$el.find(".last_name").val()
    });

    this.$el.find("form").fadeOut();

    this.render();
  }
});