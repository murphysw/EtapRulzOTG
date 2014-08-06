exports.grabTodo = function() {
	var url = "http://192.168.3.101:8080/prod/restAPI.do?command=getNewsFeed&type=tasks&db=offthegrid&userRef=43.0.2535";
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
	var url = "http://192.168.3.101:8080/prod/restAPI.do?command=getNewsFeed&type=news&db=offthegrid&userRef=43.0.2535";
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
	var url = "http://192.168.3.101:8080/prod/restAPI.do?command=getNewsFeed&type=activities&db=offthegrid&userRef=43.0.2535";
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