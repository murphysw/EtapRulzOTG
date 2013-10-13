function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "person";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Models.instance("person");
    $.__views.index = Ti.UI.createView({
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.doneLink = Ti.UI.createView({
        top: "15dp",
        id: "doneLink"
    });
    $.__views.index.add($.__views.doneLink);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Done",
        id: "__alloyId6"
    });
    $.__views.doneLink.add($.__views.__alloyId6);
    $.__views.personView = Ti.UI.createView({
        id: "personView"
    });
    $.__views.index.add($.__views.personView);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "I'm a person",
        id: "name",
        doClick: "saveContact"
    });
    $.__views.personView.add($.__views.name);
    $.__views.saveLink = Ti.UI.createView({
        top: "5dp",
        id: "saveLink"
    });
    $.__views.index.add($.__views.saveLink);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        text: "Save",
        id: "__alloyId7"
    });
    $.__views.saveLink.add($.__views.__alloyId7);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var person;
    var setPerson = function(p) {
        var person = Alloy.Models.person;
        person.set("FirstName", p.getFirstName());
        person.set("LastName", p.getLastName());
        person.set("Contact", p);
        $.name.text = person.get("FirstName") + " " + person.get("LastName");
    };
    setPerson(arguments[0]);
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