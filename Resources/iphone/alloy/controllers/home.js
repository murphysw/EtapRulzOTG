function Controller() {
    function refreshRss(url) {
        rss.loadRssFeed(url, {
            success: function(data) {
                var item = data[0];
                $.title.text = item.title;
                $.description.text = item.description;
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.homeView = Ti.UI.createWindow({
        backgroundColor: "#555",
        id: "homeView",
        title: "Verse Of The Day"
    });
    $.__views.rssWindow = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "400dp",
        id: "rssWindow",
        title: "Verse of the Day"
    });
    $.__views.homeView.add($.__views.rssWindow);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20dp",
        color: "#000",
        font: {
            fontSize: "25dp",
            fontFamily: "HelveticaNeue-Light"
        },
        textAlign: "left",
        ellipsize: "false",
        top: "10dp",
        left: "20dp",
        id: "title"
    });
    $.__views.rssWindow.add($.__views.title);
    $.__views.description = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "HelveticaNeue-Light"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        top: "20dp",
        left: "20dp",
        right: "20dp",
        id: "description"
    });
    $.__views.rssWindow.add($.__views.description);
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.homeView,
        id: "homeTab",
        title: "Verse"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    true && Alloy.isTablet;
    var rss = require("rss");
    refreshRss("http://www.gnpcb.org/esv/share/rss2.0/daily/");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;