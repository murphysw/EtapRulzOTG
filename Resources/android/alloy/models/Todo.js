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
            collection_name: "todo"
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

model = Alloy.M("todo", exports.definition, []);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;