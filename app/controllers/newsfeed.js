var args = arguments[0] || {};

var newsfeedItems = Alloy.Collections.newsfeed;

function dataTransform(item) {
	
	if(item.get("type") === "report")
	{
		item.set("subject", item.get("name"));
	}
	else if(item.get("type") === "dhsc")
	{
		item.set("subject", "Your data health scorecard can be viewed");
	}
	else if(item.get("type") === "massemail")
	{
		item.set("subject", "Mass Email Completed");
	}
	else if(item.get("type") === "release")
	{
		item.set("subject", item.get("name"));
	}
	else
	{
		item.set("subject", item.get("name") + " gave " + item.get("amount"));
	}
	
	return item;
};

$.newsfeedList.addEventListener('itemclick', function(_e) {
	var collection = _e.section.id === "activitySection" ? Alloy.Collections.activity : Alloy.Collections.newsfeed;
	var item = collection.models[_e.itemIndex];
	var controllertype = item.get("type");
	
	if(controllertype == null)
		controllertype = "newsfeeditem";
		
    var detailController = Alloy.createController(controllertype, {
        parentTab : $.newsfeedTab,
        data : collection.models[_e.itemIndex]
    });
    $.newsfeedTab.open(detailController.getView());
});

newsfeedItems.fetch();