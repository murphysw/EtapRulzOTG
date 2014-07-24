function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId27(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId27.opts || {};
        var models = __alloyId26.models;
        var len = models.length;
        var __alloyId22 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId23 = models[i];
            __alloyId23.__transform = dataTransform(__alloyId23);
            var __alloyId25 = {
                name: {
                    text: "undefined" != typeof __alloyId23.__transform["name"] ? __alloyId23.__transform["name"] : __alloyId23.get("name")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId23.__transform["name"] ? __alloyId23.__transform["name"] : __alloyId23.get("name"),
                    accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE
                }
            };
            __alloyId22.push(__alloyId25);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId22, opts.animation) : $.__views.peopleSection.setItems(__alloyId22);
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
            var __alloyId21 = {
                type: "Ti.UI.ImageView",
                properties: {
                    image: "/KS_nav"
                }
            };
            __alloyId18.push(__alloyId21);
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
    var __alloyId26 = Alloy.Collections["Person"] || Person;
    __alloyId26.on("fetch destroy change add remove reset", __alloyId27);
    var __alloyId28 = [];
    __alloyId28.push($.__views.peopleSection);
    $.__views.directoryList = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId28,
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
        __alloyId26.off("fetch destroy change add remove reset", __alloyId27);
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