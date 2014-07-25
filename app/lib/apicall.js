exports.grabTodo = function() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=tasks&db=OffTheGrid2&userRef=82.0.4860";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received todo tasks: " + this.responseText);
	         Alloy.Collections.todo.reset(JSON.parse(this.responseText).establishedUserTasks);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	});
	client.open("GET", url);
	client.send();
};

exports.grabNewsfeed = function() {
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
};

exports.grabActivities = function() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=getNewsFeed&type=activities&db=OffTheGrid2&userRef=82.0.4860";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         Alloy.Collections.activity.reset(JSON.parse(this.responseText).activitiesNewsFeed);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	});
	client.open("GET", url);
	client.send();
};