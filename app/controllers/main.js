function grabTodo() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Receiveds text: " + this.responseText);
	         Alloy.Collections.todo.reset(JSON.parse(this.responseText));
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

function grabNewsfeed() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=news&db=OffTheGrid2&userRef=82.0.4860";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         Alloy.Collections.newsfeed.reset(JSON.parse(this.responseText).newsNewsFeed);
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

function grabDirectory() {
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

grabTodo();
grabNewsfeed();
grabDirectory();
$.tabGroup.open();
