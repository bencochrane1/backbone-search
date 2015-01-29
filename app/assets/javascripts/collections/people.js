var App = App || {}

App.People = Backbone.Collection.extend({
    model: App.Person,
    url: '/people'
});