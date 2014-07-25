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
    this.__controllerPath = "signup";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.SignupWindow = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        id: "SignupWindow"
    });
    $.__views.SignupWindow && $.addTopLevelView($.__views.SignupWindow);
    $.__views.__alloyId61 = Ti.UI.createView({
        height: Ti.UI.FILL,
        top: 20,
        layout: "vertical",
        backgroundColor: "#FFF",
        id: "__alloyId61"
    });
    $.__views.SignupWindow.add($.__views.__alloyId61);
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
        text: "Signup",
        id: "title"
    });
    $.__views.__alloyId61.add($.__views.title);
    $.__views.__alloyId62 = Ti.UI.createLabel({
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
        left: 10,
        text: "Name *",
        id: "__alloyId62"
    });
    $.__views.__alloyId61.add($.__views.__alloyId62);
    $.__views.name = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "name",
        hintText: "enter your name"
    });
    $.__views.__alloyId61.add($.__views.name);
    $.__views.__alloyId63 = Ti.UI.createLabel({
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
        left: 10,
        text: "Email *",
        id: "__alloyId63"
    });
    $.__views.__alloyId61.add($.__views.__alloyId63);
    $.__views.email = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        id: "email",
        hintText: "jane@nonprofit.com"
    });
    $.__views.__alloyId61.add($.__views.email);
    $.__views.__alloyId64 = Ti.UI.createLabel({
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
        left: 10,
        text: "Phone *",
        id: "__alloyId64"
    });
    $.__views.__alloyId61.add($.__views.__alloyId64);
    $.__views.phone = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        id: "phone",
        hintText: "444-555-6666"
    });
    $.__views.__alloyId61.add($.__views.phone);
    $.__views.__alloyId65 = Ti.UI.createLabel({
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
        left: 10,
        text: "Organization *",
        id: "__alloyId65"
    });
    $.__views.__alloyId61.add($.__views.__alloyId65);
    $.__views.organizationName = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        id: "organizationName",
        hintText: "enter your organization"
    });
    $.__views.__alloyId61.add($.__views.organizationName);
    $.__views.__alloyId66 = Ti.UI.createLabel({
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
        left: 10,
        text: "State/Province *",
        id: "__alloyId66"
    });
    $.__views.__alloyId61.add($.__views.__alloyId66);
    $.__views.state = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        id: "state",
        hintText: "Indiana"
    });
    $.__views.__alloyId61.add($.__views.state);
    $.__views.__alloyId67 = Ti.UI.createLabel({
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
        left: 10,
        text: "Password *",
        id: "__alloyId67"
    });
    $.__views.__alloyId61.add($.__views.__alloyId67);
    $.__views.password = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        passwordMask: true,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "password",
        hintText: "enter password"
    });
    $.__views.__alloyId61.add($.__views.password);
    $.__views.passwordRequirements = Ti.UI.createLabel({
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
        text: "Make it 6+ characters & include a number",
        id: "passwordRequirements"
    });
    $.__views.__alloyId61.add($.__views.passwordRequirements);
    $.__views.__alloyId68 = Ti.UI.createLabel({
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
        left: 10,
        text: "ConfirmPassword *",
        id: "__alloyId68"
    });
    $.__views.__alloyId61.add($.__views.__alloyId68);
    $.__views.confirmPassword = Ti.UI.createTextField({
        backgroundColor: "#FFF",
        color: "#888",
        left: 10,
        right: 10,
        height: "40dp",
        borderColor: "#888",
        top: 10,
        passwordMask: true,
        autocorrection: false,
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        id: "confirmPassword",
        hintText: "enter same password as above"
    });
    $.__views.__alloyId61.add($.__views.confirmPassword);
    $.__views.submit = Ti.UI.createButton({
        title: "Sign Up",
        backgroundColor: "#fff",
        left: 10,
        right: 10,
        height: "40dp",
        top: 10,
        id: "submit"
    });
    $.__views.__alloyId61.add($.__views.submit);
    $.__views.cancel = Ti.UI.createButton({
        id: "cancel"
    });
    $.__views.__alloyId61.add($.__views.cancel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.SignupWindow.open();
    $.submit.addEventListener("click", function() {
        $.submit.title = "Working ...";
        var url = "http://172.24.50.76:8080/prod/restAPI.do?command=createDatabase&db=OffTheGrid&isMobile=true";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                '{"msg":"fail"}' == this.responseText ? alert("Failed! Make sure all fields are filled in.") : alert("Success! You will receive an email asking to verify your email address.");
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("An Error Occurred!");
            },
            timeout: 5e3
        });
        var postData = {
            name: $.name.value,
            email: $.email.value,
            phone: $.phone.value,
            organizationName: $.organizationName.value,
            state: $.state.value,
            password: $.password.value,
            loginId: $.email.value,
            loginIdShow: $.email.value,
            confirmPassword: $.confirmPassword.value,
            agree: true
        };
        client.open("POST", url);
        client.send(postData);
    });
    $.cancel.addEventListener("click", function() {
        alert("Canceled");
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;