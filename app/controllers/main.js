if (!Ti.App.Properties.hasProperty('seeded')) {
	var url = "http://www.cornerstoneofgreenwood.com/app/php/directoryquery.php";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         Alloy.Collections.Person.reset(JSON.parse(this.responseText));
    		 
    		 $.tabGroup.open();
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	});
	client.open("GET", url);
	client.send();
}
else
{
	$.tabGroup.open();
}

