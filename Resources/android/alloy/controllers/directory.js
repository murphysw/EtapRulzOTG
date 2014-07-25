function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId16(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId16.opts || {};
        var models = __alloyId15.models;
        var len = models.length;
        var __alloyId11 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = dataTransform(__alloyId12);
            var __alloyId14 = {
                name: {
                    text: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId12.__transform["url"] ? __alloyId12.__transform["url"] : __alloyId12.get("url")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name"),
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
                }
            };
            __alloyId11.push(__alloyId14);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId11, opts.animation) : $.__views.peopleSection.setItems(__alloyId11);
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
            var __alloyId10 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    bindId: "image"
                }
            };
            __alloyId6.push(__alloyId10);
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
    var __alloyId15 = Alloy.Collections["Person"] || Person;
    __alloyId15.on("fetch destroy change add remove reset", __alloyId16);
    var __alloyId17 = [];
    __alloyId17.push($.__views.peopleSection);
    $.__views.directoryList = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId17,
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
        __alloyId15.off("fetch destroy change add remove reset", __alloyId16);
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