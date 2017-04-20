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
			$stm=$connect->prepare("UPDATE eventi SET titolo='".$_POST['titolo']."', data='".$_POST['data']."', idCat='".$_POST['cat']."', provincia='".$_POST['provincia']."' WHERE idEvento=".$_POST['idEvento']."");		
		

		
			if($stm->execute())
			{
				//echo $dbh->lastInsertId();
				echo "Evento modificato correttamente\n";
			}
			else
				print_r($stm->errorInfo()); 
				//echo 'errore';	

	    $stm=$connect->prepare("UPDATE posts SET commento='".$_POST['commento']."', voto=".$_POST['voto']." WHERE Ev_idEvento=".$_POST['idEvento']." AND Ut_Nickname='".$_SESSION['nickname']."'");		
		if($stm->execute())
			{
				//echo $dbh->lastInsertId();
				echo 'Valutazione modificata correttamente';
			}
			else
				print_r($stm->errorInfo()); 

	
?>