function Controller() {
    function __alloyId14(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId14.opts || {};
        var models = __alloyId13.models;
        var len = models.length;
        var __alloyId9 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId10 = models[i];
            __alloyId10.__transform = dataTransform(__alloyId10);
            var __alloyId12 = {
                name: {
                    text: "undefined" != typeof __alloyId10.__transform["name"] ? __alloyId10.__transform["name"] : __alloyId10.get("name")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId10.__transform["name"] ? __alloyId10.__transform["name"] : __alloyId10.get("name"),
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
                }
            };
            __alloyId9.push(__alloyId12);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId9, opts.animation) : $.__views.peopleSection.setItems(__alloyId9);
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
    $.__views.directoryWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "directoryWindow",
        title: "Directory"
    });
    $.__views.__alloyId0 = Ti.UI.createSearchBar({
        barColor: "#333",
        id: "__alloyId0"
    });
    var __alloyId1 = {};
    var __alloyId4 = [];
    var __alloyId5 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId6 = [];
            var __alloyId8 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    width: Ti.UI.SIZE,
                    height: "32dp",
                    color: "#000",
                    font: {
                        fontSize: 20,
                        fontFamily: "Helvetica Neue",
                        fontWeight: 200
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    ellipsize: "false",
                    borderRadius: "5dp",
                    backgroundPaddingBottom: "5dp",
                    backgroundPaddingTop: "5dp",
                    left: "10dp",
                    bindId: "name"
                }
            };
            __alloyId6.push(__alloyId8);
            return __alloyId6;
        }(),
        properties: {
            height: "32dp",
            backgroundColor: "#f4f4f4",
            border: 0,
            hasChild: true,
            borderRadius: 2,
            width: "90%",
            top: "6dp",
            layout: "vertical"
        }
    };
    __alloyId4.push(__alloyId5);
    var __alloyId3 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId4
    };
    __alloyId1["template"] = __alloyId3;
    $.__views.peopleSection = Ti.UI.createListSection({
        id: "peopleSection"
    });
    var __alloyId13 = Alloy.Collections["Person"] || Person;
    __alloyId13.on("fetch destroy change add remove reset", __alloyId14);
    var __alloyId15 = [];
    __alloyId15.push($.__views.peopleSection);
    $.__views.directoryList = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId15,
        templates: __alloyId1,
        searchView: $.__views.__alloyId0,
        id: "directoryList",
        defaultItemTemplate: "template"
    });
    $.__views.directoryWindow.add($.__views.directoryList);
    $.__views.directoryTab = Ti.UI.createTab({
        window: $.__views.directoryWindow,
        id: "directoryTab",
        title: "Directory",
        icon: "KS_nav_ui.png"
    });
    $.__views.directoryTab && $.addTopLevelView($.__views.directoryTab);
    exports.destroy = function() {
        __alloyId13.off("fetch destroy change add remove reset", __alloyId14);
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