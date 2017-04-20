$(document).ready(function() {
	
		$( function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd");
  
  } );
  
		$.getJSON("../Models/getSession.php",function(res) {
           				if (res.log!=='ok'){
										
									location.replace("login.html");
									}
                	document.getElementById('lblNick').innerHTML = res.nickname;
            });
        
		$.getJSON("../Models/getCat.php",function(res) {
           			if (res) {
                var select=$("#cat");
                $.each(res,function(k,v){
                    var option=$('<option value='+v['idCategoria']+'>'+v['descrizione']+'</option>');                  	
									select.append(option);
                });
									
            }});
            
		$.getJSON("../Models/getProv.php",function(res) {
           			if (res) {
                var select=$("#prov");
                $.each(res,function(k,v){
                    var option=$('<option value='+v['idLuogo']+'>'+v['Prov_siglaProv']+'</option>');
									select.append(option);
                });
									
            }});
  $.getJSON("../Models/getEvento.php",{idEvento: localStorage.id},function(res) {
	        			if (res) {
              
                $.each(res,function(k,v){
									$('input#tit').val(v['titolo']);
									$('select#prov').val(v['provincia']);
                  $('select#cat').val(v['idCat']);
                  $('input#datepicker').val(v['data']);
                });
									
            }});
	 $.getJSON("../Models/getPost.php",{idEvento: localStorage.id},function(res) {
	        			if (res) {
              
                $.each(res,function(k,v){
									$('textarea#postText').val(v['commento']);
									$('input#'+v['voto']).prop("checked", true);
                });
									
            }});
	
        
		$('#btnLogout').click(function(){
			$.getJSON("../Models/logout.php", function() {	});
								location.replace("login.html");
		});
	
		$('#btnAlterEv').click(function(){
			
			$.post("../Models/alterEv.php",{"idEvento" : localStorage.id, "data":$('input#datepicker').val(),"titolo":$('input#tit').val(), "provincia":$('select#prov').val(), "cat":$('select#cat').val(),"commento":$('textarea#postText').val(), voto:$("input[name=optradio]:checked").attr("id")

 },function (res)
		{
		alert(res);
		location.replace("reserved.html");
		});
	 

			
		});								
			
				
		
		});
	
	