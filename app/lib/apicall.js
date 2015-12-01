exports.grabTodo = function() {
	var data = {};
	var url = "https://192.168.3.101:8443/prod/restAPI.do?command=getNewsFeed&type=tasks&db=offthegrid&userRef=43.0.2535&userId=etaprules";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received todo tasks: " + this.responseText);
	         data = JSON.parse(this.responseText).establishedUserTasks.reverse();
	         Alloy.Collections.todo.reset(data);
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
	var data = {};
	var url = "https://192.168.3.101:8443/prod/restAPI.do?command=getNewsFeed&type=news&db=offthegrid&userRef=43.0.2535&userId=etaprules";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         data = JSON.parse(this.responseText).newsNewsFeed.reverse();
	         Alloy.Collections.newsfeed.reset(data);
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
	var data = {};
	var url = "https://192.168.3.101:8443/prod/restAPI.do?command=getNewsFeed&type=activities&db=offthegrid&userRef=43.0.2535&userId=etaprules";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         data = JSON.parse(this.responseText).activitiesNewsFeed.reverse();
	         Alloy.Collections.activity.reset(data);
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