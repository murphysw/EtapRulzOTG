function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "person";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var person;
    $.parent = args.parent;
    $.doneLink.addEventListener("click", function() {
        $.trigger("nav", {
            action: "personClose"
        });
    });
    $.saveLink.addEventListener("click", function() {
        Titanium.Contacts.saveContact(person.get("Contact"));
        $.trigger("nav", {
            action: "personSave"
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;