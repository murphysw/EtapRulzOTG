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
            "collection_name": "activity"
        }
    },
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};