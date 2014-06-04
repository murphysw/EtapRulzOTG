function Controller() {
    function __alloyId17(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId17.opts || {};
        var models = __alloyId16.models;
        var len = models.length;
        var __alloyId12 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId13 = models[i];
            __alloyId13.__transform = dataTransform(__alloyId13);
            var __alloyId15 = {
                name: {
                    text: "undefined" != typeof __alloyId13.__transform["name"] ? __alloyId13.__transform["name"] : __alloyId13.get("name")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId13.__transform["name"] ? __alloyId13.__transform["name"] : __alloyId13.get("name")
                }
            };
            __alloyId12.push(__alloyId15);
        }
        opts.animation ? $.__views.__alloyId11.setItems(__alloyId12, opts.animation) : $.__views.__alloyId11.setItems(__alloyId12);
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
    $.__views.__alloyId11 = Ti.UI.createListSection({
        id: "__alloyId11"
    });
    var __alloyId16 = Alloy.Collections["Person"] || Person;
    __alloyId16.on("fetch destroy change add remove reset", __alloyId17);
    var __alloyId18 = [];
    __alloyId18.push($.__views.__alloyId11);
    $.__views.directoryTable = Ti.UI.createListView({
        backgroundColor: "#333",
        sections: __alloyId18,
        templates: __alloyId3,
        searchView: $.__views.__alloyId2,
        id: "directoryTable",
        defaultItemTemplate: "template"
    });
    $.__views.directoryWindow.add($.__views.directoryTable);
    $.__views.directoryTab = Ti.UI.createTab({
        window: $.__views.directoryWindow,
        id: "directoryTab",
        title: "Directory",
        icon: "KS_nav_ui.png"
    });
    $.__views.directoryTab && $.addTopLevelView($.__views.directoryTab);
    exports.destroy = function() {
        __alloyId16.off("fetch destroy change add remove reset", __alloyId17);
    };
    _.extend($, $.__views);
    Alloy.Collections.Person;
    $.directoryTable.addEventListener("click", function(_e) {
        var detailController = Alloy.createController("person", {
            parentTab: $.directoryTab,
            data: Alloy.Collections.Person.models[_e.index]
        });
        $.directoryTab.open(detailController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;