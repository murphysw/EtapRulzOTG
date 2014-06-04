function Controller() {
    function __alloyId6(e) {
        if (e && e.fromAdapter) return;
        __alloyId6.opts || {};
        var models = dofilter(__alloyId5);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId4 = Alloy.createController("directoryRow", {
                $model: __alloyId2,
                __parentSymbol: __parentSymbol
            });
            rows.push(__alloyId4.getViewEx({
                recurse: true
            }));
        }
        $.__views.directoryTable.setData(rows);
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
        backgroundColor: "#333",
        id: "directoryWindow",
        title: "Directory"
    });
    $.__views.directoryTable = Ti.UI.createTableView({
        id: "directoryTable"
    });
    $.__views.directoryWindow.add($.__views.directoryTable);
    var __alloyId5 = Alloy.Collections["Person"] || Person;
    __alloyId5.on("fetch destroy change add remove reset", __alloyId6);
    $.__views.directoryTab = Ti.UI.createTab({
        window: $.__views.directoryWindow,
        id: "directoryTab",
        title: "Directory",
        icon: "KS_nav_ui.png"
    });
    $.__views.directoryTab && $.addTopLevelView($.__views.directoryTab);
    exports.destroy = function() {
        __alloyId5.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    var peopleCollection = Alloy.Collections.Person;
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