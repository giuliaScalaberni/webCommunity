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
	
	//insert into mysql table
			$stm=$connect->prepare("DELETE FROM eventi WHERE idEvento='".$_POST['idEvento']."'");		
		

		
			if($stm->execute())
			{
				//echo $dbh->lastInsertId();
				echo 'Evento eliminato correttamente';
			}
			else
				print_r($stm->errorInfo()); 
				//echo 'errore';	
	    
    
	
?>