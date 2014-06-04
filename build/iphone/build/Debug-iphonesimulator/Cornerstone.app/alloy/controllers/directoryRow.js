function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directoryRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.directoryRow = Ti.UI.createTableViewRow({
        height: "40dp",
        backgroundColor: "#F3F3F3",
        dataId: "",
        id: "directoryRow"
    });
    $.__views.directoryRow && $.addTopLevelView($.__views.directoryRow);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#fff",
        borderRadius: 8,
        borderColor: "#000",
        borderWidth: 2,
        width: 300,
        height: 300,
        top: 20,
        layout: "vertical",
        id: "wrapper"
    });
    $.__views.directoryRow.add($.__views.wrapper);
    $.__views.name = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "28dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        borderRadius: "5dp",
        backgroundPaddingBottom: "5dp",
        backgroundPaddingTop: "5dp",
        left: "10dp",
        id: "name",
        text: "undefined" != typeof $model.__transform["name"] ? $model.__transform["name"] : $model.get("name")
    });
    $.__views.wrapper.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;