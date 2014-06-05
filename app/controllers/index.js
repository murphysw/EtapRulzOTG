var acs = require('acs');
var controller = Alloy.createController( acs.isLoggedIn() ? "main" : "login");
$.index.open(controller.getView());