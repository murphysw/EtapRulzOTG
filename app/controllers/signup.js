$.SignupWindow.open();

$.submit.addEventListener('click', function() {
	$.submit.title = 'Working ...';
	var url = "http://172.24.50.76:8080/prod/restAPI.do?command=createDatabase&db=OffTheGrid&isMobile=true";
	var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         Ti.API.info("Received text: " + this.responseText);
	         if(this.responseText=='{"msg":"fail"}')
	         {
	         	alert("Failed! Make sure all fields are filled in.");
	         }
	         else
	         {
	         	alert("Success! You will receive an email asking to verify your email address.");
	         }
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('An Error Occurred!');
	     },
	     timeout : 5000
	});
	var postData = {"name":$.name.value, "email":$.email.value, "phone":$.phone.value, "organizationName":$.organizationName.value, "state":$.state.value, "password":$.password.value,  "loginId":$.email.value, "loginIdShow":$.email.value, "confirmPassword":$.confirmPassword.value, "agree":true};
	client.open("POST", url);
	client.send(postData);
});

$.cancel.addEventListener('click', function(){
	alert("Canceled");
});


