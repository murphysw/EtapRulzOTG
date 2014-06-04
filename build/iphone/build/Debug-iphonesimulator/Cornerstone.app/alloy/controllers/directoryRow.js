function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directoryRow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.row = Ti.UI.createTableViewRow({
        height: "28dp",
        model: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id"),
        data_modelId: "undefined" != typeof $model.__transform["alloy_id"] ? $model.__transform["alloy_id"] : $model.get("alloy_id"),
        id: "row",
        dataId: ""
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    $.__views.__alloyId7 = Ti.UI.createView({
        id: "__alloyId7"
    });
    $.__views.row.add($.__views.__alloyId7);
    $.__views.name = Ti.UI.createLabel({
        height: "28dp",
        id: "name",
        text: "undefined" != typeof $model.__transform["FirstName"] ? $model.__transform["FirstName"] : $model.get("FirstName")
    });
    $.__views.__alloyId7.add($.__views.name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;