/**
 * @author Ian Thomas
 */
var person;
var contact;

var setPerson = function(p)
{
	var person = Alloy.Models.person;
	person.set("FirstName", p.getFirstName());
	person.set("LastName", p.getLastName());
	person.set("Contact", p);
	$.name.text = person.get("FirstName") + " " + person.get("LastName"); 
}

var saveContact = function()
{
	
};

setPerson(arguments[0]);

$.doneLink.addEventListener("click", function() {
	$.trigger("nav", { action: "personClose"});
});

$.saveLink.addEventListener("click", function() {
	Titanium.Contacts.saveContact(person.get("Contact"));
	$.trigger("nav", { action: "personSave"});
});


