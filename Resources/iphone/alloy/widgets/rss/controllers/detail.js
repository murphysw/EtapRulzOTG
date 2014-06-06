function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "rss/" + s : s.substring(0, index) + "/rss/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("rss");
    this.__widgetId = "rss";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "detail";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.detail = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "detail"
    });
    $.__views.detail && $.addTopLevelView($.__views.detail);
    $.__views.web = Ti.UI.createWebView({
        id: "web"
    });
    $.__views.detail.add($.__views.web);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.web.url = args.articleUrl;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;