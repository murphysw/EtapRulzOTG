var args = arguments[0] || {};

var todoItems = Alloy.Collections.todo;

function dataTransform(item) {
	//item.set("subject", item.get("name") + " gave " + item.get("amount"));
	return item;
};

$.todoList.addEventListener('itemclick', function(_e) {
    var detailController = Alloy.createController('todoitem', {
        parentTab : $.todoTab,
        data : Alloy.Collections.todo.models[_e.itemIndex]
    });
    $.todoTab.open(detailController.getView());
});

todoItems.fetch();