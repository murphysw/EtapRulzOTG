var args = arguments[0] || {};

$.loginButton.addEventListener('click', function() {
	var mainController = Alloy.createController('main');
    	mainController.getView().open();
});