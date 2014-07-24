function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

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
        if (person.get("AddressStreet")) {
            person.set("address1", person.get("AddressStreet"));
            person.set("address2", person.get("AddressCity") + ", " + person.get("AddressState") + " " + person.get("AddressZip"));
        }
        person.set("url", "http://cornerstoneofgreenwood.com/app/images/profiles/" + person.get("ImageUrl"));
        return person;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
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
                    layout: "vertical",
                    borderRadius: "5dp",
                    backgroundPaddingBottom: "5dp",
                    backgroundPaddingTop: "5dp",
                    left: "10dp",
                    bindId: "name"
                }
            };
            __alloyId6.push(__alloyId8);
            var __alloyId9 = {
                type: "Ti.UI.ImageView",
                properties: {
                    image: "/KS_nav"
                }
            };
            __alloyId6.push(__alloyId9);
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
    var __alloyId14 = Alloy.Collections["Person"] || Person;
    __alloyId14.on("fetch destroy change add remove reset", __alloyId15);
    var __alloyId16 = [];
    __alloyId16.push($.__views.peopleSection);
    $.__views.directoryList = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId16,
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