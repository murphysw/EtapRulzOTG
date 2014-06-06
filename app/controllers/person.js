/**
 * @author Ian Thomas
 */
var args = arguments[0] || {};
var person;
var contact;

$.personDetail.set(args.data.attributes);
$.parent = args.parent;

function doClickMaps(e) {  
	if(OS_IOS) {
		var address = Ti.Network.encodeURIComponent($.personDetail.get("address1") + " " + $.personDetail.get("address2"));
	    Ti.Platform.openURL('maps://maps.google.com/maps?q=' + address);
	} else {
		Ti.Platform.openURL('geo:0,0?q=' + address);
	}
}

$.address1Label.addEventListener('click', function(e) { doClickMaps(e); });
$.address2Label.addEventListener('click', function(e) { doClickMaps(e); });

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
