function trash(clicked_id)
{
	$.post("../Models/deleteEv.php",{"idEvento" : clicked_id},function (res)
		{
		alert(res);
		$('row'+clicked_id).remove();
		location.replace("reserved.html");
		});
	 

		}
function alter(clicked_id)
{
	location.replace("event.html");
	
localStorage.id=clicked_id;
}
$(document).ready(function() {
	
		$( function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd");
  
  } );
		
        
								$("#search").hide();     
		
		
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
	$.getJSON("../Models/getMyEv.php",function(res) {
            if (res) {
								var i=0;
                var table=$('<br> <table id="tableMyEv" style="border:solid 2px; border-color:green" class="table"><tbody></tbody></table>');
                table.append('<thead style="border:solid 2px; border-color:green"><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>Provincia</th><th></th><th></th></tr></thead>');
                $.each(res,function(k,v){
											i++;
                    var row=$('<tr id="row"+'+v["idEvento"]+'><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['Prov_siglaProv']+'</td><td> <button type="button" onClick="alter(this.id)" id='+v["idEvento"]+'  class="trash btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" onClick="trash(this.id)" id='+v["idEvento"]+'  class="trash btn btn-default"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
                  
									//$("#btnTrash").setAttribute("id","btnTrash"+i);  
									
									table.append(row);
                });
							if (i==0){
								$("#contentMyEventi").empty();
								$("#contentMyEventi").append("<label>NOTHING INSERTED BY YOU!</label>");
								
							}
							else{
								$("#contentMyEventi").empty();
                $("#contentMyEventi").append(table);
							
								}
                $("#btnGetMyEv").hide();
							
            }
        });
        
		$('#btnLogout').click(function(){
			$.getJSON("../Models/logout.php", function() {	});
								location.replace("login.html");
										
										
			
				
		
		});
	

	// button get evento
    $("#btnGetEv").click(function() {
		$.getJSON("../Models/getEv.php",function(res) {
            if (res) {
                var table=$('<br><table id="tableEv" class="table"><tbody></tbody></table>');
                table.append('<thead  style="border:solid 2px; border-color:red"><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>nickname</th><th>Provincia</th></tr></thead>');
                $.each(res,function(k,v){
                    var row=$('<tr><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['nickname']+'</td><td>'+v['Prov_siglaProv']+'</td></tr>');
                    table.append(row);
                });
							
								$("#contentEventi").empty();
								$('#titEv').append('<hr><h3>All Events</h3><br>');
                $("#contentEventi").append(table);
                $("#btnGetEv").hide();
								$("#search").show(); 
            }
        });
		
    });
		$("#search").keyup(function () {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableEv");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
});
	
		
		

	// button insert evento
    $("#btnInsertEv").click(function() {
	 			var t = $('input#tit').val();
        var p=$('select#prov').val();
        var c=$('select#cat').val();
        var d=$('input#datepicker').val();
			
			var v = $('input[type=radio][name=optradio]:checked').attr('id');
			 if ((t==='')||(p==='')||(c==='')||(d==='')){
				 alert("RIEMPIRE TUTTI I CAMPI CORRETTAMENTE");
			 }
			else {
      $.post("../Models/insertEv.php",{"titolo" : t, "provincia" : p , "idCat" : c , "data" : d}, function(res){alert (res);});
			$.post("../Models/insertPost.php",{"commento" : 	$('textarea#postText').val(), "voto" :$("input[name=optradio]:checked").attr("id")}, function(res){alert(res);});
				 
			$("#btnGetEv").show();
			$("#search").show();  
			$('input#tit').val('');
				location.replace("reserved.html");
																																					 
		
			
     

			
			 }   
       
    });
		
		
		 });