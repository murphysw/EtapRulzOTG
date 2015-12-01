var args = arguments[0] || {};
var apicall = require('apicall');
var todoItems = Alloy.Collections.todo;

function dataTransform(item) {
	//item.set("subject", item.get("name") + " gave " + item.get("amount"));
	return item;
};

$.todoList.addEventListener('itemclick', function(_e) {
	var item = Alloy.Collections.todo.models[_e.itemIndex];
	var controllertype = item.get("type");
	
	if(controllertype == "generic")
		controllertype = "task";
		
    var detailController = Alloy.createController(controllertype, {
        parentTab : $.todoTab,
        data : item
    });
    detailController.getView().open();
});

var api = {
    data : {},

    initialize: function() {
        if (args.pulltorefresh) {
            args.pulltorefresh.setCallback(api.doRefresh);
        }
        api.updateListView();
    },

    doRefresh: function(e) {
        // Call your updateListView function
        api.updateListView();
    },

    updateListView: function() {
    	if (args.pulltorefresh) {
            args.pulltorefresh.stop(240, 20);
        }
        
		apicall.grabTodo();
    }
};

api.initialize();
todoItems.fetch();