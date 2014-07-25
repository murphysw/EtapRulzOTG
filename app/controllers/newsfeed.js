var args = arguments[0] || {};

var newsfeedItems = Alloy.Collections.newsfeed;

function dataTransform(item) {
	item.set("subject", item.get("name") + " gave " + item.get("amount"));
	return item;
};

$.newsfeedList.addEventListener('itemclick', function(_e) {
    var detailController = Alloy.createController('newsfeeditem', {
        parentTab : $.newsfeedTab,
        data : Alloy.Collections.newsfeed.models[_e.itemIndex]
    });
    $.newsfeedTab.open(detailController.getView());
});

newsfeedItems.fetch();