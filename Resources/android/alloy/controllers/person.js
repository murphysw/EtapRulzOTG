function Controller() {
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
        id: "detailWindow",
        model: "$.personDetail",
        dataTransform: "dataTransformation"
    });
    $.__views.detailWindow && $.addTopLevelView($.__views.detailWindow);
    $.__views.firstNameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "30dp",
        id: "firstNameLabel"
    });
    $.__views.detailWindow.add($.__views.firstNameLabel);
    $.__views.lastNameLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "50dp",
        id: "lastNameLabel"
    });
    $.__views.detailWindow.add($.__views.lastNameLabel);
    $.__views.addressLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "70dp",
        id: "addressLabel"
    });
    $.__views.detailWindow.add($.__views.addressLabel);
    $.__views.cityLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "90dp",
        id: "cityLabel"
    });
    $.__views.detailWindow.add($.__views.cityLabel);
    $.__views.stateLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "110dp",
        id: "stateLabel"
    });
    $.__views.detailWindow.add($.__views.stateLabel);
    $.__views.phoneLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: "130dp",
        id: "phoneLabel"
    });
    $.__views.detailWindow.add($.__views.phoneLabel);
    $.__views.emailLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: "32dp",
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "emailLabel"
    });
    $.__views.detailWindow.add($.__views.emailLabel);
    $.__views.saveContactButton = Ti.UI.createButton({
        top: "5dp",
        title: "Save Contact",
        id: "saveContactButton"
    });
    $.__views.detailWindow.add($.__views.saveContactButton);
    var __alloyId21 = function() {
        $.firstNameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["FirstName"] : $.personDetail.get("FirstName");
        $.firstNameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["FirstName"] : $.personDetail.get("FirstName");
        $.lastNameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["LastName"] : $.personDetail.get("LastName");
        $.lastNameLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["LastName"] : $.personDetail.get("LastName");
        $.addressLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressStreet"] : $.personDetail.get("AddressStreet");
        $.addressLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressStreet"] : $.personDetail.get("AddressStreet");
        $.cityLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressCity"] : $.personDetail.get("AddressCity");
        $.cityLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressCity"] : $.personDetail.get("AddressCity");
        $.stateLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressState"] : $.personDetail.get("AddressState");
        $.stateLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["AddressState"] : $.personDetail.get("AddressState");
        $.phoneLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Phone"] : $.personDetail.get("Phone");
        $.phoneLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Phone"] : $.personDetail.get("Phone");
        $.emailLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Email"] : $.personDetail.get("Email");
        $.emailLabel.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["Email"] : $.personDetail.get("Email");
    };
    $.personDetail.on("fetch change destroy", __alloyId21);
    exports.destroy = function() {
        $.personDetail.off("fetch change destroy", __alloyId21);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.personDetail.set(args.data.attributes);
    $.parent = args.parent;
    $.saveContactButton.addEventListener("click", function() {
        Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED ? saveContact() : Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN && Ti.Contacts.requestAuthorization(function(e) {
            e.success && saveContact();
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;