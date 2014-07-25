var acs = require('acs');

acs.isLoggedIn(function(){
    $.logincontainer.hide();
    $.parent.close();
		var mainController = Alloy.createController('main');
    	$.parent.open(mainController.getView());
    if(OS_ANDROID) Ti.UI.Android.hideSoftKeyboard();
});

var createCallback = function(user) {
	if(user) {
		var mainController = Alloy.createController('loginform');
    	mainController.getView().open();
		if(OS_ANDROID) Ti.UI.Android.hideSoftKeyboard();
	} else {
		$.submit.title = 'Try again ...';
		setTimeout(function(){
			$.submit.title = 'Create Account';
		}, 1000);
	}
};

$.submit.addEventListener('click', function() {
	createCallback(true);
});

$.signup.addEventListener('click', function() {
	var signupController = Alloy.createController('signup');
	signupController.getView().open();
});

