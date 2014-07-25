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
        backgroundColor: "FFF",
        height: Ti.UI.FILL,
        top: 20,
        layout: "vertical",
        id: "logincontainer"
    });
    $.__views.logincontainer && $.addTopLevelView($.__views.logincontainer);
    $.__views.wrapper = Ti.UI.createView({
        top: 20,
        layout: "vertical",
        backgroundColor: "#FFF",
        id: "wrapper"
    });
    $.__views.logincontainer.add($.__views.wrapper);
    $.__views.logo = Ti.UI.createImageView({
        top: 50,
        id: "logo",
        image: "/trent_etap_do_logo.png"
    });
    $.__views.wrapper.add($.__views.logo);
    $.__views.submit = Ti.UI.createImageView({
        id: "submit",
        image: "/signinwithblackbaud.png"
    });
    $.__views.wrapper.add($.__views.submit);
    $.__views.google = Ti.UI.createImageView({
        id: "google",
        image: "/signinwithgoogle.png"
    });
    $.__views.wrapper.add($.__views.google);
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
        text: "Don't have an eTapestry account?",
        id: "title"
    });
    $.__views.wrapper.add($.__views.title);
    $.__views.signup = Ti.UI.createLabel({
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
        text: "Start my 30 Day Free Trial",
        id: "signup"
    });
    $.__views.wrapper.add($.__views.signup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var acs = require("acs");
    acs.isLoggedIn(function() {
        $.logincontainer.hide();
        $.parent.close();
        var mainController = Alloy.createController("main");
        $.parent.open(mainController.getView());
    });
    var createCallback = function(user) {
        if (user) {
            var mainController = Alloy.createController("main");
            mainController.getView().open();
        } else {
            $.submit.title = "Try again ...";
            setTimeout(function() {
                $.submit.title = "Create Account";
            }, 1e3);
        }
    };
    $.submit.addEventListener("click", function() {
        createCallback(true);
    });
    $.signup.addEventListener("click", function() {
        var signupController = Alloy.createController("signup");
        signupController.getView().open();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;