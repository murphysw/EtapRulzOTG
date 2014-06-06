var acs = require('acs');
var controller = Alloy.createController(acs.isLoggedIn() ? 'main' : 'login').getView().open();
