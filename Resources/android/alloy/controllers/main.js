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
        var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=tasks&db=OffTheGrid2&userRef=82.0.4860";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received todo tasks: " + this.responseText);
                Alloy.Collections.todo.reset(JSON.parse(this.responseText).establishedUserTasks);
                Alloy.Collections.todo.fetch();
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
    $.__views.__alloyId27 = Alloy.createController("newsfeed", {
        id: "__alloyId27",
        __parentSymbol: __parentSymbol
    });
    __alloyId26.push($.__views.__alloyId27.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId28 = Alloy.createController("todo", {
        id: "__alloyId28",
        __parentSymbol: __parentSymbol
    });
    __alloyId26.push($.__views.__alloyId28.getViewEx({
        recurse: true
    }));
    $.__views.tabGroup = Ti.UI.createTabGroup({
        tabs: __alloyId26,
        id: "tabGroup"
    });
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var gifts = [ {
        name: "John Smith",
        amount: "$40.00"
    }, {
        name: "Tim Jones",
        amount: "$80.00"
    }, {
        name: "Linda Johnson",
        amount: "$70.00"
    }, {
        name: "Tom Anderson",
        amount: "$30.00"
    }, {
        name: "Ian Thomas",
        amount: "$100.00"
    }, {
        name: "Trent Punt",
        amount: "$250.00"
    } ];
    grabTodo();
    Alloy.Collections.newsfeed.reset(gifts);
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;