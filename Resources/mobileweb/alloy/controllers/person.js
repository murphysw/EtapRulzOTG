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
    $.__views.name_lbl = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        },
        textAlign: "center",
        id: "name_lbl"
    });
    $.__views.detailWindow.add($.__views.name_lbl);
    $.__views.saveContactButton = Ti.UI.createButton({
        top: "5dp",
        title: "Save Contact",
        id: "saveContactButton"
    });
    $.__views.detailWindow.add($.__views.saveContactButton);
    var __alloyId11 = function() {
        $.name_lbl.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["FirstName"] : $.personDetail.get("FirstName");
        $.name_lbl.text = _.isFunction($.personDetail.transform) ? $.personDetail.transform()["FirstName"] : $.personDetail.get("FirstName");
    };
    $.personDetail.on("fetch change destroy", __alloyId11);
    exports.destroy = function() {
        $.personDetail.off("fetch change destroy", __alloyId11);
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