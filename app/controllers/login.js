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
		$.parent.close();
		var mainController = Alloy.createController('main');
    	$.parent.open(mainController.getView());
		if(OS_ANDROID) Ti.UI.Android.hideSoftKeyboard();
	} else {
		$.submit.title = 'Try again ...';
		setTimeout(function(){
			$.submit.title = 'Create Account';
		}, 1000);
	}
};

$.submit.addEventListener('click', function() {
	$.name.blur();
	$.password.blur();
	$.submit.title = 'Working ...';
	acs.createUser($.name.value, $.password.value, createCallback);
});

