function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = dofilter(__alloyId7);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId6 = Alloy.createController("directoryRow", {
                $model: __alloyId4,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.directoryTable.setData(rows);
    }
    function dataTransformation() {
        return {
            name: _model.attributes.FirstName + " " + _model.attributes.LastName
        };
    }
    function dofilter() {
        return peopleCollection.filter(function() {
            return true;
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Person");
    $.__views.directoryWindow = Ti.UI.createWindow({
        backgroundColor: "transparent",
        id: "directoryWindow",
        title: "Directory"
    });
    $.__views.directoryTable = Ti.UI.createTableView({
        backgroundColor: "#333",
        id: "directoryTable"
    });
    $.__views.directoryWindow.add($.__views.directoryTable);
    var __alloyId7 = Alloy.Collections["Person"] || Person;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    $.__views.directoryTab = Ti.UI.createTab({
        window: $.__views.directoryWindow,
        id: "directoryTab",
        title: "Directory",
        icon: "KS_nav_ui.png"
    });
    $.__views.directoryTab && $.addTopLevelView($.__views.directoryTab);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    var peopleCollection = Alloy.Collections.Person;
    $.directoryTable = _.extend({}, $.directoryTable, {
        transform: function() {
            return dataTransformation(peopleCollection);
        }
    });
    $.directoryTable.addEventListener("click", function(_e) {
        var detailController = Alloy.createController("person", {
            parentTab: $.directoryTab,
            data: Alloy.Collections.Person.models[_e.index]
        });
        $.directoryTab.open(detailController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;