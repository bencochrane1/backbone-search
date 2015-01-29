var App = App || {}

App.Person = Backbone.Model.extend({
    urlRoot: '/people',

    fullName: function() {
        return this.get('first_name') + " " + this.get('last_name');
    }
});