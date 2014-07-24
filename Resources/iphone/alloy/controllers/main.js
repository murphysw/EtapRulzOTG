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
    var __alloyId33 = [];
    $.__views.__alloyId34 = Alloy.createController("home", {
        id: "__alloyId34",
        __parentSymbol: __parentSymbol
    });
    __alloyId33.push($.__views.__alloyId34.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId35 = Alloy.createController("directory", {
        id: "__alloyId35",
        __parentSymbol: __parentSymbol
    });
    __alloyId33.push($.__views.__alloyId35.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId36 = Alloy.createController("nursery", {
        id: "__alloyId36",
        __parentSymbol: __parentSymbol
    });
    __alloyId33.push($.__views.__alloyId36.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId37 = Alloy.createController("RecommendedItems", {
        id: "__alloyId37",
        __parentSymbol: __parentSymbol
    });
    __alloyId33.push($.__views.__alloyId37.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId33,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var url = "http://172.24.50.76:8080/prod/restAPI.do";
    var client = Ti.Network.createHTTPClient({
        onload: function() {
            Ti.API.info("done!");
            Ti.API.info("Receiveds text: " + this.responseText);
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
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;