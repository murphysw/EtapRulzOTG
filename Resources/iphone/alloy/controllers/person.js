function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function doClickMaps() {
        var address = Ti.Network.encodeURIComponent($.personDetail.get("address1") + " " + $.personDetail.get("address2"));
        Ti.Platform.openURL("maps://maps.google.com/maps?q=" + address);
    }
    function saveContact() {
        Titanium.Contacts.createPerson({
            firstName: $.personDetail.get("FirstName"),
            lastName: $.personDetail.get("LastName"),
            address: {
                home: [ {
                    CountryCode: "us",
                    Street: $.personDetail.get("AddressStreet"),
                    City: $.personDetail.get("AddressCity"),
                    State: $.personDetail.get("AddressState"),
                    ZIP: $.personDetail.get("AddressZip")
                } ]
            },
            phone: {
                mobile: [ $.personDetail.get("Phone") ]
            }
        });
        alert("Contact Saved");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "person";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.personDetail = Alloy.createModel("Person");
    $.__views.personWindow = Ti.UI.createWindow({
        backgroundColor: "#555",
        id: "personWindow",
        model: "$.personDetail",
        dataTransform: "dataTransformation"
    });
    $.__views.personWindow && $.addTopLevelView($.__views.personWindow);
    $.__views.detailView = Ti.UI.createView({
        backgroundColor: "#FFF",
        layout: "vertical",
        top: "10dp",
        left: "10dp",
        right: "10dp",
        height: "400dp",
        id: "detailView"
    });
    $.__views.personWindow.add($.__views.detailView);
    $.__views.accountImage = Ti.UI.createImageView({
        width: "15%",
        id: "accountImage"
    });
    $.__views.detailView.add($.__views.accountImage);
    $.__views.nameLabel = Ti.UI.createLabel({
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
        top: "10dp",
        left: "10dp",
        id: "nameLabel"
    });
    $.__views.detailView.add($.__views.nameLabel);
    $.__views.address1Label = Ti.UI.createLabel({
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
        top: "10dp",
        left: "10dp",
        id: "address1Label"
    });
    $.__views.detailView.add($.__views.address1Label);
    $.__views.address2Label = Ti.UI.createLabel({
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
        top: "2dp",
        left: "10dp",
        id: "address2Label"
    });
    $.__views.detailView.add($.__views.address2Label);
    $.__views.phoneLabel = Ti.UI.createLabel({
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
        left: "10dp",
        id: "phoneLabel"
    });
    $.__views.detailView.add($.__views.phoneLabel);
    $.__views.emailLabel = Ti.UI.createLabel({
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
        left: "10dp",
        id: "emailLabel"
    });
    $.__views.detailView.add($.__views.emailLabel);
    $.__views.saveContactButton = Ti.UI.createButton({
        title: "Save Contact",
        top: "20dp",
        layout: "vertical",
        id: "saveContactButton"
    });
    $.__views.detailView.add($.__views.saveContactButton);
    var __alloyId60 = function() {
        $.accountImage.image = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["url"] : $.personDetail.get("url");
        $.accountImage.image = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["url"] : $.personDetail.get("url");
        $.nameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["name"] : $.personDetail.get("name");
        $.nameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["name"] : $.personDetail.get("name");
        $.address1Label.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["address1"] : $.personDetail.get("address1");
        $.address1Label.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["address1"] : $.personDetail.get("address1");
        $.address2Label.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["address2"] : $.personDetail.get("address2");
        $.address2Label.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["address2"] : $.personDetail.get("address2");
        $.phoneLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Phone"] : $.personDetail.get("Phone");
        $.phoneLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Phone"] : $.personDetail.get("Phone");
        $.emailLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Email"] : $.personDetail.get("Email");
        $.emailLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Email"] : $.personDetail.get("Email");
    };
    $.personDetail.on("fetch change destroy", __alloyId60);
    exports.destroy = function() {
        $.personDetail.off("fetch change destroy", __alloyId60);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.personDetail.set(args.data.attributes);
    $.parent = args.parentTab;
    if (null != $.personDetail.get("address1")) {
        $.address1Label.addEventListener("click", function(e) {
            doClickMaps(e);
        });
        $.address2Label.addEventListener("click", function(e) {
            doClickMaps(e);
        });
    } else {
        $.detailView.remove($.address1Label);
        $.detailView.remove($.address2Label);
    }
    $.saveContactButton.addEventListener("click", function() {
        Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED ? saveContact() : Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN && Ti.Contacts.requestAuthorization(function(e) {
            e.success && saveContact();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;