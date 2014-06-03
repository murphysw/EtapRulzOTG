exports.definition = {
    config : {
         "columns": {
            "FirstName": "Text",
            "LastName": "Text",
            "Contact" : "Object"
        },
        "defaults": {
            "FirstName": "-",
            "LastName": "-"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "Person"
        }
    },

    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model 
        });
		
        return Model;
    },

    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
            // Extend, override or implement Backbone.Collection 
        });
		
        return Collection;
    }
};