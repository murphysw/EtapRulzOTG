function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("person");
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.tab1 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "tab1",
        title: "Tab 1"
    });
    $.__views.__alloyId4 = Ti.UI.createTab({
        window: $.__views.tab1,
        title: "Directory",
        icon: "KS_nav_ui.png",
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4);
    $.__views.tab2 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "tab2",
        title: "Tab 2"
    });
    $.__views.__alloyId5 = Ti.UI.createTab({
        window: $.__views.tab2,
        title: "Calendar",
        icon: "KS_nav_views.png",
        id: "__alloyId5"
    });
    $.__views.index.addTab($.__views.__alloyId5);
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.directory = Alloy.createController("directory");
    $.tab1.add($.directory.getView());
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;