var peopleCollection = Alloy.Collections.Person;

function dataTransform(person) {
	person.set("name", person.get("FirstName") + " " +  person.get("LastName"));
	person.set("address1", person.get("AddressStreet"));
	person.set("address2", person.get("AddressCity") + ", " + person.get("AddressState") + " " + person.get("AddressZip"));
	person.set("url", "http://cornerstoneofgreenwood.com/app/images/profiles/" + person.get("ImageUrl"));
	return person;
};

$.directoryList.addEventListener('itemclick', function(_e) {
    var detailController = Alloy.createController('person', {
        parentTab : $.directoryTab,
        data : Alloy.Collections.Person.models[_e.itemIndex]
    });
    $.directoryTab.open(detailController.getView());
});

peopleCollection.fetch();
