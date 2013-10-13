function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "directory";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.container = Ti.UI.createView({
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.directory = Ti.UI.createTableView({
        id: "directory"
    });
    $.__views.container.add($.__views.directory);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var people = [];
    var url = "http://www.cornerstoneofgreenwood.com/utils/test.php";
    var getDirectory = function() {
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                people = JSON.parse(this.responseText);
                var data = [];
                people.map(function(person) {
                    var p = Titanium.Contacts.createPerson({
                        firstName: person.FirstName,
                        lastName: person.LastName,
                        address: {
                            home: [ {
                                CountryCode: "us",
                                Street: person.AddressStreet,
                                City: person.AddressCity,
                                State: person.AddressState,
                                ZIP: person.AddressZip
                            } ]
                        },
                        phone: {
                            mobile: [ person.Phone ]
                        }
                    });
                    var name = p.getFirstName() + " " + p.getLastName();
                    var row = Ti.UI.createTableViewRow({
                        title: name
                    });
                    row.hasDetail = true;
                    row.addEventListener("click", function() {
                        $.person = Alloy.createController("person", p);
                        $.container.add($.person.getView());
                    });
                    people.push(p);
                    data.push(row);
                });
                $.directory.setData(data);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("error");
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    };
    Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED ? getDirectory() : Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN && Ti.Contacts.requestAuthorization(function(e) {
        e.success && getDirectory();
    });
    $.on("nav", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;