function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "RecommendedItems";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.RecommendedItemsWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "RecommendedItemsWindow",
        title: "Recommended Tasks"
    });
    $.__views.__alloyId49 = Ti.UI.createSearchBar({
        barColor: "#333",
        id: "__alloyId49"
    });
    var __alloyId50 = {};
    var __alloyId53 = [];
    var __alloyId54 = {
        type: "Ti.UI.View",
        childTemplates: function() {
            var __alloyId55 = [];
            var __alloyId56 = {
                type: "Ti.UI.ImageView",
                properties: {}
            };
            __alloyId55.push(__alloyId56);
            return __alloyId55;
        }(),
        properties: {}
    };
    __alloyId53.push(__alloyId54);
    var __alloyId52 = {
        properties: {
            name: "template"
        },
        childTemplates: __alloyId53
    };
    __alloyId50["template"] = __alloyId52;
    var __alloyId58 = [];
    $.__views.__alloyId59 = {
        properties: {
            accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_DISCLOSURE,
            id: "__alloyId59"
        }
    };
    __alloyId58.push($.__views.__alloyId59);
    $.__views.RecommendedItems = Ti.UI.createListSection({
        id: "RecommendedItems"
    });
    $.__views.RecommendedItems.items = __alloyId58;
    var __alloyId60 = [];
    __alloyId60.push($.__views.RecommendedItems);
    $.__views.RecommendedItemsList = Ti.UI.createListView({
        sections: __alloyId60,
        templates: __alloyId50,
        searchView: $.__views.__alloyId49,
        id: "RecommendedItemsList",
        defaultItemTemplate: "template"
    });
    $.__views.RecommendedItemsWindow.add($.__views.RecommendedItemsList);
    $.__views.RecommendedItemsTab = Ti.UI.createTab({
        window: $.__views.RecommendedItemsWindow,
        id: "RecommendedItemsTab",
        title: "Recommended Items",
        icon: "KS_nav_ui.png"
    });
    $.__views.RecommendedItemsTab && $.addTopLevelView($.__views.RecommendedItemsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;