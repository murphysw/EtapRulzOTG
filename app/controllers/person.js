/**
 * @author Ian Thomas
 */
var args = arguments[0] || {};
var person;
var contact;

function dataTransform(person) {
	//person.set("name", person.get("FirstName") + " " +  person.get("LastName"));
	return person;
};

$.personDetail.set(args.data.attributes);
$.parent = args.parent;

$.saveContactButton.addEventListener("click", function() {
	
	if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_AUTHORIZED)
	{
    	saveContact();
	} 
	else if (Ti.Contacts.contactsAuthorization == Ti.Contacts.AUTHORIZATION_UNKNOWN)
	{
	    Ti.Contacts.requestAuthorization(function(e){
	        if (e.success) {
	            saveContact();
	        } else {
	            //Nothing;
	        }
	    });
	}
});

function saveContact() {
	Titanium.Contacts.createPerson({
 		firstName: $.personDetail.get("FirstName"),
	  	lastName: $.personDetail.get("LastName"),
	  	address:{
	    	home:[
	      	  {
		        CountryCode: 'us', // determines how the address is displayed
		        Street: $.personDetail.get("AddressStreet"),
		        City: $.personDetail.get("AddressCity"),
		        State: $.personDetail.get("AddressState"),
		        ZIP: $.personDetail.get("AddressZip")
	      	 }
	     ]
	  },
	  phone:{
	    mobile: [$.personDetail.get("Phone")]
	  }
	});
	alert("Contact Saved");
};
