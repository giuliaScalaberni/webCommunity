<?php session_start()?>
<?php
	try{
		//$connect=new PDO('mysql:dbname=quintaa_simu2015;localhost','root');
		$connect=new PDO('mysql:host=localhost;dbname=quintaa_simu2015;localhost','root');
		//$connect = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
	

 
 $stmt = $connect->prepare("SELECT MAX(idEvento) AS max FROM eventi WHERE nickname='".$_SESSION['nickname']."'");
    if ($stmt->execute()) {
			$id   = $stmt->fetch(PDO::FETCH_ASSOC);
			
			
   

	$stm=$connect->prepare("INSERT INTO posts ( commento, voto, Ev_idEvento, Ut_Nickname) VALUES (:comm, :voto, :ev, :ut)");		
			$stm->bindValue(':comm',$_POST['commento']);
			$stm->bindValue(':voto',$_POST['voto']);
			$stm->bindValue(':ev',$id['max']);
			$stm->bindValue(':ut', $_SESSION['nickname']);

		
			if($stm->execute())
			{
				echo 'Post pubblicato correttamente';
			}
			else
				echo print_r($stm->errorInfo()); 
				//echo 'errore';	
	    
     }
	
			
				//echo 'errore';	
	//insert into mysql table
		
    
	
?>