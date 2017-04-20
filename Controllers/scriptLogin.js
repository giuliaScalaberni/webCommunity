$(document).ready(function() {
// button login
    $("#btnLogin").click(function() {
	
				
	 			var nick = $('input#nick').val();
        var psw=$('input#psw').val();      
        var richiesta = $.ajax({
                            url: "../Models/login.php", 
														type: "GET",
                            data: {"nickname" : nick, "password" : psw},
                            dataType: "text",
														success: function(){
															location.replace("reserved.html");
															} ,
															error: function(){
																	alert('nickname or password incorrect');
															}
														});
			
    });
				
			
       
    
});
 