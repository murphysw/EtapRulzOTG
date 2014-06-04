var peopleCollection = Alloy.Collections.Person;

$.directoryTable = _.extend({}, $.directoryTable, {
    transform : function() {
        return dataTransformation(peopleCollection);
    }
});

function dataTransformation(_collection) {
    return {
        name : _model.attributes.FirstName + " " +  _model.attributes.LastName,
    };
    
    return fugitiveCollection.filter(function(_i){
        return !_i.attributes.captured
    });
}

function dofilter(_collection) {
    return peopleCollection.filter(function(_i){
        return true;
    });
}

$.directoryTable.addEventListener('click', function(_e) {
    var detailController = Alloy.createController('person', {
        parentTab : $.directoryTab,
        data : Alloy.Collections.Person.models[_e.index]
    });
    $.directoryTab.open(detailController.getView());
});