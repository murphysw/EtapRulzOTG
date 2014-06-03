/*     	var p = Titanium.Contacts.createPerson({
     		firstName: person.FirstName,
		  	lastName: person.LastName,
		  	address:{
		    	home:[
		      	  {
			        CountryCode: 'us', // determines how the address is displayed
			        Street: person.AddressStreet,
			        City: person.AddressCity,
			        State: person.AddressState,
			        ZIP: person.AddressZip
		      	 }
		     ]
		  },
		  phone:{
		    mobile: [person.Phone]
		  }
		});
     	//var name = p.getFirstName() + " " + p.getLastName();
     	//var row = Alloy.createController("directoryRow", {
     	//	name: name
 		//});
     	row.hasDetail = true;
     	row.addEventListener("click", function() {
     		var personView = Alloy.createController("person", {
     			parent: $.directoryTab,
     			data: person	
     			
 			});
 			
 			$.directoryTab.open(personView.getView());
     	});
     	
     	//people.push(p);
     	//data.push(row);
     });
	       
     //$.directoryTab.setData(data);

};*/
$.directory.addEventListener('click', function(_e) {
    var detailController = Alloy.createController('person', {
        parentTab : $.directoryTab,
        data : Alloy.Collections.Person.get(_e.rowData.model)
    });
    $.directoryTab.open(detailController.getView());
});