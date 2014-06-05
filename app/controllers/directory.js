var peopleCollection = Alloy.Collections.Person;

function dataTransform(person) {
	person.set("name", person.get("FirstName") + " " +  person.get("LastName"));
	return person;
};

function dofilter(_collection) {
    return peopleCollection.filter(function(_i){
        return true;
    });
}

$.directoryList.addEventListener('itemclick', function(_e) {
    var detailController = Alloy.createController('person', {
        parentTab : $.directoryTab,
        data : Alloy.Collections.Person.models[_e.itemIndex]
    });
    $.directoryTab.open(detailController.getView());
});