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
    this.__controllerPath = "login";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Person");
    $.__views.logincontainer = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        height: Ti.UI.FILL,
        top: 20,
        layout: "vertical",
        id: "logincontainer"
    });
    $.__views.logincontainer && $.addTopLevelView($.__views.logincontainer);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#CCC",
        borderRadius: 8,
        top: 20,
        layout: "vertical",
        width: "75%",
        height: "50%",
        id: "wrapper"
    });
    $.__views.logincontainer.add($.__views.wrapper);
    $.__views.title = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "HelveticaNeue-Light"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        layout: "vertical",
        top: 10,
        text: "Login",
        id: "title"
    });
    $.__views.wrapper.add($.__views.title);
    $.__views.name = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#FFF",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 30,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "name",
        hintText: "username"
    });
    $.__views.wrapper.add($.__views.name);
    $.__views.password = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#FFF",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        passwordMask: true,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "password",
        hintText: "password"
    });
    $.__views.wrapper.add($.__views.password);
    $.__views.submit = Ti.UI.createButton({
        title: "Create Account",
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        height: "40dp",
        top: 10,
        id: "submit"
    });
    $.__views.wrapper.add($.__views.submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var acs = require("acs");
    acs.isLoggedIn(function() {
        $.logincontainer.hide();
        $.parent.close();
        var mainController = Alloy.createController("main");
        $.parent.open(mainController.getView());
        Ti.UI.Android.hideSoftKeyboard();
    });
    var createCallback = function(user) {
        if (user) {
            $.parent.close();
            var mainController = Alloy.createController("main");
            $.parent.open(mainController.getView());
            Ti.UI.Android.hideSoftKeyboard();
        } else {
            $.submit.title = "Try again ...";
            setTimeout(function() {
                $.submit.title = "Create Account";
            }, 1e3);
        }
    };
    $.submit.addEventListener("click", function() {
        $.name.blur();
        $.password.blur();
        $.submit.title = "Working ...";
        acs.createUser($.name.value, $.password.value, createCallback);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;