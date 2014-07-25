function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId46(e) {
        if (e && e.fromAdapter) return;
        var opts = __alloyId46.opts || {};
        var models = __alloyId45.models;
        var len = models.length;
        var __alloyId41 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId42 = models[i];
            __alloyId42.__transform = dataTransform(__alloyId42);
            var __alloyId44 = {
                name: {
                    text: "undefined" != typeof __alloyId42.__transform["name"] ? __alloyId42.__transform["name"] : __alloyId42.get("name")
                },
                amount: {
                    text: "undefined" != typeof __alloyId42.__transform["amount"] ? __alloyId42.__transform["amount"] : __alloyId42.get("amount")
                },
                properties: {
                    searchableText: "undefined" != typeof __alloyId42.__transform["name"] ? __alloyId42.__transform["name"] : __alloyId42.get("name")
                }
            };
            __alloyId41.push(__alloyId44);
        }
        opts.animation ? $.__views.peopleSection.setItems(__alloyId41, opts.animation) : $.__views.peopleSection.setItems(__alloyId41);
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
    this.__controllerPath = "newsfeed";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.newsfeedWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "newsfeedWindow"
    });
    $.__views.__alloyId30 = Ti.UI.createSearchBar({
        barColor: "#333",
        id: "__alloyId30"
    });
    var __alloyId31 = {};
    var __alloyId34 = [];
    var __alloyId35 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId36 = [];
            var __alloyId38 = {
                type: "Ti.UI.Label",
                bindId: "name",
                properties: {
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    color: "#000",
                    font: {
                        fontSize: "20dp",
                        fontFamily: "HelveticaNeue-Light"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    ellipsize: "false",
                    layout: "vertical",
                    bindId: "name"
                }
            };
            __alloyId36.push(__alloyId38);
            var __alloyId40 = {
                type: "Ti.UI.Label",
                bindId: "amount",
                properties: {
                    width: Ti.UI.SIZE,
                    height: Ti.UI.SIZE,
                    color: "#000",
                    font: {
                        fontSize: "20dp",
                        fontFamily: "HelveticaNeue-Light"
                    },
                    textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
                    ellipsize: "false",
                    layout: "vertical",
                    bindId: "amount"
                }
            };
            __alloyId36.push(__alloyId40);
            return __alloyId36;
        }(),
        properties: {}
    };
    __alloyId34.push(__alloyId35);
    var __alloyId33 = {
        properties: {
            name: "basicNewsfeedItem"
        },
        childTemplates: __alloyId34
    };
    __alloyId31["basicNewsfeedItem"] = __alloyId33;
    $.__views.peopleSection = Ti.UI.createListSection({
        id: "peopleSection"
    });
    var __alloyId45 = Alloy.Collections["newsfeed"] || newsfeed;
    __alloyId45.on("fetch destroy change add remove reset", __alloyId46);
    var __alloyId47 = [];
    __alloyId47.push($.__views.peopleSection);
    $.__views.newsfeedList = Ti.UI.createListView({
        sections: __alloyId47,
        templates: __alloyId31,
        searchView: $.__views.__alloyId30,
        id: "newsfeedList",
        defaultItemTemplate: "basicNewsfeedItem"
    });
    $.__views.newsfeedWindow.add($.__views.newsfeedList);
    $.__views.newsfeedTab = Ti.UI.createTab({
        window: $.__views.newsfeedWindow,
        id: "newsfeedTab",
        title: "My Newsfeed",
        icon: "KS_nav_ui.png"
    });
    $.__views.newsfeedTab && $.addTopLevelView($.__views.newsfeedTab);
    exports.destroy = function() {
        __alloyId45.off("fetch destroy change add remove reset", __alloyId46);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    var newsfeedItems = Alloy.Collections.newsfeed;
    $.newsfeedList.addEventListener("itemclick", function(_e) {
        var detailController = Alloy.createController("person", {
            parentTab: $.newsfeedTab,
            data: Alloy.Collections.Person.models[_e.itemIndex]
        });
        $.newsfeedTab.open(detailController.getView());
    });
    newsfeedItems.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;