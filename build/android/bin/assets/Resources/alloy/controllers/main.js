function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function grabTodo() {
        var url = "http://172.24.50.76:8080/prod/restAPI.do";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Receiveds text: " + this.responseText);
                Alloy.Collections.todo.reset(JSON.parse(this.responseText));
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
    function grabNewsfeed() {
        var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=news&db=OffTheGrid2&userRef=82.0.4860";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                Alloy.Collections.newsfeed.reset(JSON.parse(this.responseText).newsNewsFeed);
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
    function grabDirectory() {
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
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __alloyId26 = [];
    $.__views.__alloyId27 = Alloy.createController("RecommendedItems", {
        id: "__alloyId27",
        __parentSymbol: __parentSymbol
    });
    __alloyId26.push($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId28 = Alloy.createController("newsfeed", {
        id: "__alloyId28",
        __parentSymbol: __parentSymbol
    });
    __alloyId26.push($.__views.__alloyId28.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId29 = Alloy.createController("directory", {
        id: "__alloyId29",
        __parentSymbol: __parentSymbol
    });
    __alloyId26.push($.__views.__alloyId29.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId26,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    grabTodo();
    grabNewsfeed();
    grabDirectory();
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;