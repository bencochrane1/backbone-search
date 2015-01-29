var App =  App || {}

App.PeopleView = Backbone.View.extend({
    
    render: function() {
        this.$el.html(HandlebarsTemplates['people']( { people: this.collection.toJSON() } ));
        return this    
    }
});