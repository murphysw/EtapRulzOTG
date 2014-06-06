function Controller() {
    function doClickMaps() {
        var encoded = Ti.Network.encodeURIComponent($.personDetail.get("address1") + " " + $.personDetail.get("address2"));
        Ti.Platform.openURL("maps://maps.google.com/maps?q=" + encoded);
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
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.personDetail = Alloy.createModel("Person");
    $.__views.detailWindow = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        id: "detailWindow",
        model: "$.personDetail",
        dataTransform: "dataTransformation"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.accountImage = Ti.UI.createImageView({
        width: "15%",
        id: "accountImage"
    });
    $.__views.detailWindow.add($.__views.accountImage);
    $.__views.nameLabel = Ti.UI.createLabel({
        width: "80%",
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "10dp",
        id: "nameLabel"
    });
    $.__views.detailWindow.add($.__views.nameLabel);
    $.__views.address1Label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "10dp",
        id: "address1Label"
    });
    $.__views.detailWindow.add($.__views.address1Label);
    $.__views.address2Label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "10dp",
        id: "address2Label"
    });
    $.__views.detailWindow.add($.__views.address2Label);
    $.__views.phoneLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "10dp",
        id: "phoneLabel"
    });
    $.__views.detailWindow.add($.__views.phoneLabel);
    $.__views.emailLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        ellipsize: "false",
        left: "10dp",
        id: "emailLabel"
    });
    $.__views.detailWindow.add($.__views.emailLabel);
    $.__views.saveContactButton = Ti.UI.createButton({
        title: "Save Contact",
        id: "saveContactButton"
    });
    $.__views.detailWindow.add($.__views.saveContactButton);
    var __alloyId24 = function() {
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
    $.personDetail.on("fetch change destroy", __alloyId24);
    exports.destroy = function() {
        $.personDetail.off("fetch change destroy", __alloyId24);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.personDetail.set(args.data.attributes);
    $.parent = args.parent;
    $.address1Label.addEventListener("click", function(e) {
        doClickMaps(e);
    });
    $.address2Label.addEventListener("click", function(e) {
        doClickMaps(e);
    });
    $.saveContactButton.addEventListener("click", function() {
        Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED ? saveContact() : Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN && Ti.Contacts.requestAuthorization(function(e) {
            e.success && saveContact();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;