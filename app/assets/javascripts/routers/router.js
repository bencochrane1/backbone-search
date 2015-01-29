var App = App || {}


App.Router = Backbone.Router.extend({

    routes: {
        "": "homePage"
    },

    homePage: function() {
        // var peopleView = new App.PeopleView({})
        console.log("it works")
    }
});

App.router = new App.Router();
