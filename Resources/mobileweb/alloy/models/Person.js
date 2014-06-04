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
            collection_name: "Person"
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

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("person", exports.definition, []);

collection = Alloy.C("person", exports.definition, model);

exports.Model = model;

exports.Collection = collection;