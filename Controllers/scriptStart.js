
$(document).ready(function(){
                  
          //popolo select per filtro ricerca provincia        
                	$.getJSON("../Models/getProv.php",function(res) {
           			if (res) {
                var select=$("#prov");
                $.each(res,function(k,v){
                    var option=$('<option value='+v['idLuogo']+'>'+v['Prov_siglaProv']+'</option>');
									select.append(option);
                });
									
            }});
	

		$.getJSON("../Models/getEv.php",function(res) {
            if (res) {
                var table=$('<br> <table id="tableEv" class="table"><tbody></tbody></table>');
                table.append('<thead><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>nickname</th><th>Provincia</th><th></th></tr></thead>');
            var link="'post.html'";
							$.each(res,function(k,v){
                    var row=$('<tr><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['nickname']+'</td><td>'+v['Prov_siglaProv']+'</td><td> <button type="button" id='+v["idEvento"]+' onClick="localStorage.id=this.id;location.href ='+link+'" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button></td></tr>');
                    table.append(row);
                });
								
                $("#contentEventi").append(table);
               
            }
       
	 });
	
	$( "#prov" ).on('change',function(){
		
    $("#contentEventi").empty();
		//se nessun filtro -> elenco tutti gli eventi
		if ($( "#prov" ).val()==='null'){
				$.getJSON("../Models/getEv.php",function(res) {
				
            if (res) {
                var table=$('<br> <table id="tableEv" class="table"><tbody></tbody></table>');
                table.append('<thead><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>nickname</th><th>Provincia</th><th></th></tr></thead>');
                var link="'post.html'"; 
							$.each(res,function(k,v){
                    var row=$('<tr><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['nickname']+'</td><td>'+v['Prov_siglaProv']+'</td><td> <button type="button" id='+v["idEvento"]+' onClick="localStorage.id=this.id;location.href ='+link+'" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button></td></tr>');
                    table.append(row);
                });
								
                $("#contentEventi").append(table);
               
            }
	 });
		}
		//elenco gli eventi in base alla provincia filtro
			else{
			
			
		$.getJSON("../Models/getEvProv.php",{"provincia" : $('select#prov').val()}, function(res){
			
							$("#contentEventi").empty();
			      if (res) {
                var table=$('<br> <table id="tableEv" class="table"><tbody></tbody></table>');
                table.append('<thead><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>nickname</th><th>Provincia</th><th></th></tr></thead>');
                var link="'post.html'"; 
							$.each(res,function(k,v){
                    var row=$('<tr><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['nickname']+'</td><td>'+v['Prov_siglaProv']+'</td><td> <button type="button" id='+v["idEvento"]+'  onClick="localStorage.id=this.id;location.href ='+link+'"  class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button></td></tr>');
                    table.append(row);
                });
							$("#contentEventi").append(table);
						}
		
	});
			}
	});
  $("#btnLogin").click(function(){
         location.replace("login.html");              
    });
		$("#btnLogon").click(function(){
         location.replace("logon.html");              
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
  });