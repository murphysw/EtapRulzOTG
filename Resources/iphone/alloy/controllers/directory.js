function Controller() {
    function __alloyId28(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId28.opts || {};
        var models = __alloyId27.models;
        var len = models.length;
        var __alloyId23 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId24 = models[i];
            __alloyId24.__transform = dataTransform(__alloyId24);
            var __alloyId26 = {
                name: {
                    text: "undefined" != typeof __alloyId24.__transform["name"] ? __alloyId24.__transform["name"] : __alloyId24.get("name")
                },
                image: {
                    image: "undefined" != typeof __alloyId24.__transform["url"] ? __alloyId24.__transform["url"] : __alloyId24.get("url")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId24.__transform["name"] ? __alloyId24.__transform["name"] : __alloyId24.get("name"),
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
                }
            };
            __alloyId23.push(__alloyId26);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId23, opts.animation) : $.__views.peopleSection.setItems(__alloyId23);
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
    $.__views.__alloyId12 = Ti.UI.createSearchBar({
        barColor: "#333",
        id: "__alloyId12"
    });
    var __alloyId13 = {};
    var __alloyId16 = [];
    var __alloyId17 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId18 = [];
            var __alloyId20 = {
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
            __alloyId18.push(__alloyId20);
            var __alloyId22 = {
                type: "Ti.UI.ImageView",
                bindId: "image",
                properties: {
                    bindId: "image"
                }
            };
            __alloyId18.push(__alloyId22);
            return __alloyId18;
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
    __alloyId16.push(__alloyId17);
    var __alloyId15 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId16
    };
    __alloyId13["template"] = __alloyId15;
    $.__views.peopleSection = Ti.UI.createListSection({
        id: "peopleSection"
    });
    var __alloyId27 = Alloy.Collections["Person"] || Person;
    __alloyId27.on("fetch destroy change add remove reset", __alloyId28);
    var __alloyId29 = [];
    __alloyId29.push($.__views.peopleSection);
    $.__views.directoryList = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId29,
        templates: __alloyId13,
        searchView: $.__views.__alloyId12,
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
        __alloyId27.off("fetch destroy change add remove reset", __alloyId28);
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