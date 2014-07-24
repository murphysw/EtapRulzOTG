	var url = "http://172.24.50.76:8080/prod/restAPI.do";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	     	 Ti.API.info("done!");
	         Ti.API.info("Receiveds text: " + this.responseText);
	         //Alloy.Collections.Person.reset(JSON.parse(this.responseText));
    		 
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

