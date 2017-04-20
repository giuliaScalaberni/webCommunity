$(document).ready(function() {
	

            
	
  $.getJSON("../Models/getEvento.php",{idEvento: localStorage.id},function(res) {
	        			if (res) {
              
                $.each(res,function(k,v){
									$('#tit').text(v['titolo']);
									$('#prov').text(v['Prov_siglaProv']);
                  $('#cat').text(v['descrizione']);
                  $('#data').text(v['data']);
									$('#nick').text(v['nickname']);
                });
									
            }});
	 $.getJSON("../Models/getPosts.php",{idEvento: localStorage.id},function(res) {
	        			if (res) {
              
                $.each(res,function(k,v){
									//$('textarea#postText').val(v['commento']);
									//$('input#'+v['voto']).prop("checked", true);
									var post=$('<div class="form-group"><h4>Nickname </h4><label>'+v['Ut_Nickname']+'<h4>Testo del Post</h4><textarea rows="8" cols="50" name="postText"id="postText" readonly>'+v['commento']+'</textarea></div><h4>Valutazione </h4><label>'+v['voto']+'</label><br><hr></div>');
                $('#posts').append(post);
								});
									
            }});
	
        
		
				// var row=$('<tr id="row"+'+v["idEvento"]+'><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['descrizione']+'</td><td>'+v['Prov_siglaProv']+'</td><td> <button type="button" onClick="alter(this.id)" id='+v["idEvento"]+'  class="trash btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button><button type="button" onClick="trash(this.id)" id='+v["idEvento"]+'  class="trash btn btn-default"><span class="glyphicon glyphicon-trash"></span></button></td></tr>');
                  

			
		});								
			
				
	