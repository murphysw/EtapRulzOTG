function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.rss/" + s : s.substring(0, index) + "/com.appcelerator.rss/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("com.appcelerator.rss");
    this.__widgetId = "com.appcelerator.rss";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var isIpad = true && Alloy.isTablet;
    var usesNavGroup = true && Alloy.isHandheld || false;
    usesNavGroup && (Alloy.Globals.navgroup = $.navgroup);
    $.master.on("detail", function(e) {
        var controller = isIpad ? $.detail : Alloy.createWidget("detail");
        var win = controller.getView();
        controller.setArticle(e.row.articleUrl);
        usesNavGroup && Alloy.Globals.navgroup.open(win);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;