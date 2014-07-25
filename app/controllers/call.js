var args = arguments[0] || {};

var api = require('apicall');

$.taskitem.set(args.data.attributes);
$.parent = args.parentTab;

$.remindImage.addEventListener("click", function() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=updateFeedItem&type=remind&db=OffTheGrid2&userRef=82.0.4860&taskRef=" + $.taskitem.get("taskRef");
	Ti.API.info("Url to remind: " + url);
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         alert("You will be reminded about this task");
	         $.taskWindow.close();
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	});
	client.open("GET", url);
	client.send();
});

function dismissTask() {
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=updateFeedItem&type=dismiss&db=OffTheGrid2&userRef=82.0.4860&taskRef=" + $.taskitem.get("taskRef");
	Ti.API.info("Url to dismiss: " + url);
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         alert("Task dismissed");
	         $.taskWindow.close();
	         api.grabTodo();
	         Alloy.Collection.todo.fetch();
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

$.doneImage.addEventListener("click", dismissTask);
$.ignoreImage.addEventListener("click", dismissTask);
