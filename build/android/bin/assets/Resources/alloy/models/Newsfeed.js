var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            FirstName: "Text",
            LastName: "Text",
            Contact: "Object"
        },
        defaults: {
            FirstName: "-",
            LastName: "-"
        },
        adapter: {
            type: "sql",
            collection_name: "newsfeed"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("newsfeed", exports.definition, []);

collection = Alloy.C("newsfeed", exports.definition, model);

exports.Model = model;

exports.Collection = collection;