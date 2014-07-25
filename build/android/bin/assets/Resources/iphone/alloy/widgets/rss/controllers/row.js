function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "rss/" + s : s.substring(0, index) + "/rss/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("rss");
    this.__widgetId = "rss";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        backgroundColor: "#fff",
        className: "itemRow",
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.image = Ti.UI.createImageView({
        height: "42dp",
        width: "68dp",
        left: "5dp",
        top: "3dp",
        touchEnabled: false,
        id: "image"
    });
    $.__views.row.add($.__views.image);
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
    $.__views.row.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "70dp",
        color: "#000",
        font: {
            fontSize: "16dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "83dp",
        right: "3dp",
        touchEnabled: false,
        id: "title"
    });
    $.__views.row.add($.__views.title);
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
        id: "description"
    });
    $.__views.row.add($.__views.description);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.row.articleUrl = args.articleUrl;
    $.image.image = args.image;
    $.date.text = args.date;
    $.title.text = args.title;
    $.description.text = args.description;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;