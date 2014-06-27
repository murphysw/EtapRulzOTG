function Controller() {
    function __alloyId15(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId15.opts || {};
        var models = __alloyId14.models;
        var len = models.length;
        var __alloyId10 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = dataTransform(__alloyId11);
            var __alloyId13 = {
                name: {
                    text: "undefined" != typeof __alloyId11.__transform["name"] ? __alloyId11.__transform["name"] : __alloyId11.get("name")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId11.__transform["name"] ? __alloyId11.__transform["name"] : __alloyId11.get("name"),
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
                }
            };
            __alloyId10.push(__alloyId13);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId10, opts.animation) : $.__views.peopleSection.setItems(__alloyId10);
    }
    function dataTransform(person) {
        person.set("name", person.get("FirstName") + " " + person.get("LastName"));
        person.set("address1", person.get("AddressStreet"));
        person.set("address2", person.get("AddressCity") + ", " + person.get("AddressState") + " " + person.get("AddressZip"));
        person.set("url", "http://cornerstoneofgreenwood.com/app/images/profiles/" + person.get("ImageUrl"));
        return person;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId14;
    exports.destroy = function() {
        __alloyId14.off("fetch destroy change add remove reset", __alloyId15);
    };
    _.extend($, $.__views);
    var peopleCollection = Alloy.Collections.Person;
    $.directoryList.addEventListener("itemclick", function(_e) {
        var detailController = Alloy.createController("person", {
            parentTab: $.directoryTab,
            data: Alloy.Collections.Person.models[_e.itemIndex]
        });
        $.directoryTab.open(detailController.getView());
    });
    peopleCollection.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;