var gifts = [{ name: "John Smith", amount: "$40.00"},
			{ name: "Tim Jones", amount: "$80.00"},
			{ name: "Linda Johnson", amount: "$70.00"},
			{ name: "Tom Anderson", amount: "$30.00"},
			{ name: "Ian Thomas", amount: "$100.00"},
			{ name: "Trent Punt", amount: "$250.00"}];

function grabTodo() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=tasks&db=OffTheGrid2&userRef=82.0.4860";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received todo tasks: " + this.responseText);
	         Alloy.Collections.todo.reset(JSON.parse(this.responseText).establishedUserTasks);
	     	 Alloy.Collections.todo.fetch();
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
	     	 Alloy.Collections.newsfeed.fetch();
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
Alloy.Collections.newsfeed.reset(gifts);

//grabNewsfeed();
$.tabGroup.open();
