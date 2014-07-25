var args = arguments[0] || {};

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
    $.todoTab.open(detailController.getView());
});

todoItems.fetch();