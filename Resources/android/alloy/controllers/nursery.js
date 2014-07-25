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
    this.__controllerPath = "nursery";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.nurseryWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "nurseryWindow",
        title: "Nursery"
    });
    $.__views.calendar = Ti.UI.createTab({
        window: $.__views.nurseryWindow,
        id: "calendar",
        title: "Calendar",
        icon: "KS_nav_views.png"
    });
    $.__views.calendar && $.addTopLevelView($.__views.calendar);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;