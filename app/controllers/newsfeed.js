var args = arguments[0] || {};

var newsfeedItems = Alloy.Collections.newsfeed;

function dataTransform(person) {
	person.set("name", person.get("FirstName") + " " +  person.get("LastName"));
	if(person.get("AddressStreet"))
	{
		person.set("address1", person.get("AddressStreet"));
		person.set("address2", person.get("AddressCity") + ", " + person.get("AddressState") + " " + person.get("AddressZip"));
	}
	
	person.set("url", "http://cornerstoneofgreenwood.com/app/images/profiles/" + person.get("ImageUrl"));
	return person;
};

$.newsfeedList.addEventListener('itemclick', function(_e) {
    var detailController = Alloy.createController('person', {
        parentTab : $.newsfeedTab,
        data : Alloy.Collections.Person.models[_e.itemIndex]
    });
    $.newsfeedTab.open(detailController.getView());
});

newsfeedItems.fetch();