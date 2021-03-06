var args = arguments[0] || {};

var api = require('apicall');

$.taskitem.set(args.data.attributes);
$.taskitem.set("callPhone", "Call: " + args.data.attributes.phone);
$.parent = args.parentTab;

$.remindImage.addEventListener("click", function() {
	var url = "http://192.168.3.101:8080/prod/restAPI.do?command=updateFeedItem&type=remind&db=offthegrid&userRef=43.0.2535&taskRef=" + $.taskitem.get("taskRef");
	Ti.API.info("Url to remind: " + url);
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
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
});

function dismissTask() {
	var url = "http://192.168.3.101:8080/prod/restAPI.do?command=updateFeedItem&type=dismiss&db=offthegrid&userRef=43.0.2535&taskRef=" + $.taskitem.get("taskRef");
	Ti.API.info("Url to dismiss: " + url);
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
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
