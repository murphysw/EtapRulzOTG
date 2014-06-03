if (!Ti.App.Properties.hasProperty('seeded')) {
	var url = "http://www.cornerstoneofgreenwood.com/utils/test.php";
	var client = Ti.Network.createHTTPClient({
	     // function called when the response data is available
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         people = JSON.parse(this.responseText);
	         Alloy.Collections.Person.reset(people);
	         /*Alloy.Collections.Person.each(function(_m) {
        	 	_m.save();
    		 });*/
    		 
    		 $.tabGroup.open();
    		 //Ti.App.Properties.setString('seeded', 'true');
	     },
	     // function called when an error occurs, including a timeout
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000  // in milliseconds
	});
	client.open("GET", url);
	client.send();
}
else
{
	$.tabGroup.open();
}

Alloy.Collections.Person.fetch();