var people = [];
var url = "http://www.cornerstoneofgreenwood.com/utils/test.php";
var getDirectory = function() { 
	
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         people = JSON.parse(this.responseText);
	         
	         var data = [];
	         people.map(function(person) {
	         	var p = Titanium.Contacts.createPerson({
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
	         	var name = p.getFirstName() + " " + p.getLastName();
	         	var row = Ti.UI.createTableViewRow({"title": name});
	         	row.hasDetail = true;
	         	row.addEventListener("click", function() {
	         		$.person = Alloy.createController("person", p);
	         		//var contact = $.person.contactPerson;
	         		//contact.LastName = p.getLastName();
	         		//contact.FirstName = p.getFirstName();
	         		//$.person.person = p;
	         		//$.directory.close();
	         		//$.index.add($.person.getView());
	         		$.container.add($.person.getView());
	         		//$.directory.close();
	         		
	         	});
	         	people.push(p);
	         	data.push(row);
	         });
	         
	         $.directory.setData(data);
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	});
	 // Prepare the connection.
	client.open("GET", url);
	 // Send the request.
	client.send();
};

if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED){
    getDirectory();
} else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN){
    Ti.Contacts.requestAuthorization(function(e){
        if (e.success) {
            getDirectory();
        } else {
            //Nothing;
        }
    });
}

$.on("nav", function() {
	//$.person.getView().close();
});
