function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "rss/" + s : s.substring(0, index) + "/rss/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("rss");
    this.__widgetId = "rss";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    if (Alloy.isTablet) {
        $.__views.master = Alloy.createController("../widgets/rss/views/master", {
            id: "master"
        });
        $.__views.detail = Alloy.createController("../widgets/rss/views/detail", {
            id: "detail"
        });
        $.__views.index = Ti.UI.iPad.createSplitWindow({
            masterView: $.__views.master.getViewEx({
                recurse: true
            }),
            detailView: $.__views.detail.getViewEx({
                recurse: true
            }),
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
    }
    if (!Alloy.isTablet) {
        $.__views.index = Ti.UI.createWindow({
            backgroundColor: "transparent",
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
        $.__views.master = Alloy.createController("../widgets/rss/views/master", {
            id: "master",
            __parentSymbol: $.__views.index
        });
        $.__views.master.setParent($.__views.index);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;