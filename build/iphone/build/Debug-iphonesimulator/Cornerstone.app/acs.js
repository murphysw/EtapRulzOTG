var currentUser = null;

var loggedIn = false;

var Cloud = require("ti.cloud");

Cloud.debug = true;

var sid = Ti.App.Properties.getString("sessionid");

if (sid) {
    Cloud.sessionId = sid;
    loggedIn = true;
    var me = Cloud.Users.showMe(function(e) {
        currentUser = e.users[0];
    });
}

exports.isLoggedIn = function() {
    return loggedIn;
};

exports.createUser = function(username, password, callback) {
    Cloud.Users.create({
        username: username,
        password: password,
        password_confirmation: password
    }, function(e) {
        if (e.success) {
            Ti.App.Properties.setString("sessionid", e.meta.session_id);
            currentUser = e.users[0];
            loggedIn = true;
            callback(e.users[0]);
        } else {
            Ti.API.info("Error" + JSON.stringify(e));
            loggedIn = false;
            currentUser = null;
            callback(false);
        }
    });
};