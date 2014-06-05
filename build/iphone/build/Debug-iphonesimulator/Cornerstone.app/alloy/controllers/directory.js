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
                properties: {
                    searchableText: "undefined" != typeof __alloyId12.__transform["name"] ? __alloyId12.__transform["name"] : __alloyId12.get("name")
                }
            };
            __alloyId11.push(__alloyId14);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId11, opts.animation) : $.__views.peopleSection.setItems(__alloyId11);
    }
    function dataTransform(person) {
        person.set("name", person.get("FirstName") + " " + person.get("LastName"));
        return person;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Person");
    $.__views.directoryWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "directoryWindow",
        title: "Directory"
    });
    $.__views.__alloyId2 = Ti.UI.createSearchBar({
        barColor: "#333",
        id: "__alloyId2"
    });
    var __alloyId3 = {};
    var __alloyId6 = [];
    var __alloyId7 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId8 = [];
            var __alloyId10 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    width: Ti.UI.SIZE,
                    height: "32dp",
                    color: "#000",
                    font: {
                        fontSize: 20,
                        fontFamily: "Helvetica Neue"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    borderRadius: "5dp",
                    backgroundPaddingBottom: "5dp",
                    backgroundPaddingTop: "5dp",
                    left: "10dp",
                    bindId: "name"
                }
            };
            __alloyId8.push(__alloyId10);
            return __alloyId8;
        }(),
        properties: {
            height: "32dp",
            backgroundColor: "#f5f5f5",
            border: 0,
            borderRadius: 3,
            borderColor: "#DDD",
            width: "90%",
            top: "4dp",
            layout: "vertical"
        }
    };
    __alloyId6.push(__alloyId7);
    var __alloyId5 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId6
    };
    __alloyId3["template"] = __alloyId5;
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
        templates: __alloyId3,
        searchView: $.__views.__alloyId2,
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
    Alloy.Collections.Person;
    $.directoryList.addEventListener("itemclick", function(_e) {
        var detailController = Alloy.createController("person", {
            parentTab: $.directoryTab,
            data: Alloy.Collections.Person.models[_e.itemIndex]
        });
        $.directoryTab.open(detailController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;