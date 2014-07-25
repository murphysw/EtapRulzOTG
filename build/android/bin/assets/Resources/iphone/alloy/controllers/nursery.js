function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "nursery";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
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