function Controller() {
    function refreshRss(url) {
        rss.loadRssFeed(url, {
            success: function(data) {
                var item = data[0];
                $.image.image = item.image;
                $.date.text = item.date;
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
        backgroundColor: "#FFF",
        layout: "vertical",
        id: "rssWindow",
        title: "Verse of the Day"
    });
    $.__views.image = Ti.UI.createImageView({
        height: "42dp",
        width: "68dp",
        left: "5dp",
        top: "3dp",
        id: "image"
    });
    $.__views.rssWindow.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        width: "68dp",
        height: Ti.UI.SIZE,
        color: "#444",
        font: {
            fontSize: "12dp"
        },
        textAlign: "center",
        ellipsize: "false",
        left: "5dp",
        bottom: "3dp",
        touchEnabled: false,
        id: "date"
    });
    $.__views.rssWindow.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "20dp",
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "83dp",
        right: "3dp",
        top: "10dp",
        touchEnabled: false,
        id: "title"
    });
    $.__views.rssWindow.add($.__views.title);
    $.__views.description = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        top: "10dp",
        id: "description"
    });
    $.__views.rssWindow.add($.__views.description);
    $.__views.homeTab = Ti.UI.createTab({
        window: $.__views.rssWindow,
        id: "homeTab",
        title: "Verse"
    });
    $.__views.homeTab && $.addTopLevelView($.__views.homeTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    false;
    var rss = require("rss");
    refreshRss("http://www.gnpcb.org/esv/share/rss2.0/daily/");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;