$(document).ready(function() {
	
		$.getJSON("../Models/getProv.php",function(res) {
           			if (res) {
                var select=$("#prov");
                $.each(res,function(k,v){
                    var option=$('<option value='+v['idLuogo']+'>'+v['Prov_siglaProv']+'</option>');
									select.append(option);
                });
									
            }});
// button login
    $("#btnLogon").click(function() {
	      var ni = $('input#nick').val();
        var no=$('input#nome').val();
        var c = $('input#cogn').val();
        var l=$('select#prov').val();
        var e=$('input#email').val();
        var p1=$('input#psw').val();
        var p2=$('input#psw2').val();
        if (p1==p2){
					var response='';
        var richiesta = $.ajax({
                            url: "../Models/logon.php", 
														type: "POST",
                            data: {"nickname" : ni, "nome" : no, "cognome" : c, "email" : e, "password" : p1, "idLuogo" : l },
                            dataType: "json",
														success: function(){
														location.replace("reserved.html");
															} ,
															error: function(error){
																	alert('email or nick already in use');
															}
																						});
			
          	
        }
      else 
        alert("PASSWORDS ARE DIFFERENT!");
       
    });
  });
 
