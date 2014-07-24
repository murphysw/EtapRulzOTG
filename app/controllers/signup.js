$.SignupWindow.open();

$.submit.addEventListener('click', function() {
	$.submit.title = 'Working ...';
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=createDatabase&db=OffTheGrid";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
    		 alert(this.responseText);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	});
	var postData = {"name":$.name.value, "email":$.email.value, "phone":$.phone.value, "organizationName":$.organizationName.value, "state":$.state.value, "password":$.password.value, "confirmPassword":$.confirmPassword.value};
	client.open("POST", url);
	client.send(postData);
});


