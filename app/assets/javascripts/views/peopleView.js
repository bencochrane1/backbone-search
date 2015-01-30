var App =  App || {}

App.PeopleView = Backbone.View.extend({

    events: {
        'keyup input.main-entry': 'search',
        // 'click li': 'addInName',
        'click button': 'deletePerson',
        'dblclick li': 'renderForm', 
        'submit form': 'updatePerson'
    },

    updatePerson: function(e) {
        e.preventDefault();
        var firstNameData = $(e.currentTarget).find(".first_name").val();
        var lastNameData = $(e.currentTarget).find(".last_name").val();
        var id = $(e.currentTarget).parent().attr("data-id");
        var data = this.collection.get(id);
        data.save({
            first_name: firstNameData,
            last_name: lastNameData
        });
        $(e.currentTarget).fadeOut();
        this.search();
    },

    renderForm: function(e) {
        var id = $(e.currentTarget).attr("data-id");
        var data = this.collection.get(id);
        $(e.currentTarget).html(JST['form']( data.toJSON() ));

    },

    deletePerson: function(e) {
        var id = $(e.currentTarget).parent().attr("data-id");
        e.stopPropagation();
        $(e.currentTarget).parent().fadeOut();
        this.collection.get(id).destroy();
    },

    render: function() {
        this.$el.html(JST['app']());
        this.renderCollection(this.collection.toJSON());
        return this;       
    },

    renderCollection: function(data) {
        this.$el.find('ul').html(JST['people']({ people: data }));
        return this;
    },

    search: function() {
        searchText = this.$el.find('input').val();
        if (searchText == "") {
            this.renderCollection(this.collection.toJSON());
        } else {
            var searchdata = this.collection.filterBySearch(searchText).toJSON();
            this.renderCollection(searchdata);
        }
    },

    addInName: function(e) {
        var id = $(e.currentTarget).attr("data-id");
        var textForFilling = this.collection.get(id).fullName();

        this.$el.find('input').val(textForFilling);
        this.search();
        // clickedList = this.$el.find(e.currentTarget).text();
        // this.$el.find('input').val(clickedList);
    },

    renderSearchBox: function() {
        this.$el.find('#inputForm').html(JST['inputbox']());
    }
    
});