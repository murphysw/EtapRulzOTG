function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __alloyId20 = [];
    $.__views.__alloyId21 = Alloy.createController("directory", {
        id: "__alloyId21",
        __parentSymbol: __parentSymbol
    });
    __alloyId20.push($.__views.__alloyId21.getViewEx({
        recurse: true
    }));
    $.__views.tab2 = Ti.UI.createWindow({
        id: "tab2",
        title: "Tab 2"
    });
    $.__views.calendar = Ti.UI.createTab({
        window: $.__views.tab2,
        id: "calendar",
        title: "Calendar",
        icon: "KS_nav_views.png"
    });
    __alloyId20.push($.__views.calendar);
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId20,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Ti.App.Properties.hasProperty("seeded")) $.tabGroup.open(); else {
        var url = "http://www.cornerstoneofgreenwood.com/utils/test.php";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                Alloy.Collections.Person.reset(JSON.parse(this.responseText));
                $.tabGroup.open();
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    Alloy.Collections.Person.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;