function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId21 = [];
    $.__views.__alloyId22 = Alloy.createController("home", {
        id: "__alloyId22",
        __parentSymbol: __parentSymbol
    });
    __alloyId21.push($.__views.__alloyId22.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId23 = Alloy.createController("directory", {
        id: "__alloyId23",
        __parentSymbol: __parentSymbol
    });
    __alloyId21.push($.__views.__alloyId23.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId24 = Alloy.createController("nursery", {
        id: "__alloyId24",
        __parentSymbol: __parentSymbol
    });
    __alloyId21.push($.__views.__alloyId24.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId21,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if (Ti.App.Properties.hasProperty("seeded")) $.tabGroup.open(); else {
        var url = "http://www.cornerstoneofgreenwood.com/app/php/directoryquery.php";
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;