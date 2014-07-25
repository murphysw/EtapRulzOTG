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
    $.__views.rssWindow = Ti.UI.createWindow({
        backgroundColor: "#555",
        id: "rssWindow",
        title: "Verse Of The Day"
    });
    $.__views.rssView = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "400dp",
        id: "rssView",
        title: "Verse of the Day"
    });
    $.__views.rssWindow.add($.__views.rssView);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "40dp",
        color: "#000",
        font: {
            fontSize: "35dp",
            fontFamily: "HelveticaNeue-Light"
        },
        textAlign: "left",
        ellipsize: "false",
        layout: "vertical",
        top: "10dp",
        left: "20dp",
        id: "title"
    });
    $.__views.rssView.add($.__views.title);
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
        layout: "vertical",
        top: "20dp",
        left: "20dp",
        right: "20dp",
        id: "description"
    });
    $.__views.rssView.add($.__views.description);
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.rssWindow,
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