function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("Person");
    $.__views.logincontainer = Ti.UI.createWindow({
        backgroundColor: "#CCC",
        height: Ti.UI.FILL,
        top: 20,
        layout: "absolute",
        id: "logincontainer"
    });
    $.__views.logincontainer && $.addTopLevelView($.__views.logincontainer);
    $.__views.wrapper = Ti.UI.createView({
        backgroundColor: "#CCC",
        borderRadius: 8,
        borderColor: "#000",
        borderWidth: 2,
        top: 20,
        id: "wrapper"
    });
    $.__views.logincontainer.add($.__views.wrapper);
    $.__views.img = Ti.UI.createImageView({
        image: "/images/login.png",
        id: "img"
    });
    $.__views.wrapper.add($.__views.img);
    $.__views.name = Ti.UI.createTextField({
        backgroundColor: "#CCC",
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
        backgroundColor: "#CCC",
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
    });
    var createCallback = function(user) {
        if (user) {
            $.parent.close();
            var mainController = Alloy.createController("main");
            $.parent.open(mainController.getView());
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
    Alloy.Collections.Person.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;