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
			$stm=$connect->prepare("INSERT INTO eventi ( titolo, provincia, data, idCat, nickname) VALUES (:tit, :prov, :datepicker, :cat, :nick)");		
			$stm->bindValue(':tit',$_POST['titolo']);
			$stm->bindValue(':prov',$_POST['provincia']);
			$stm->bindValue(':datepicker',$_POST['data']);
			$stm->bindValue(':cat',$_POST['idCat']);
			$stm->bindValue(':nick', $_SESSION['nickname']);

		
			if($stm->execute())
			{
				//echo $dbh->lastInsertId();
				//$ok=$stm->lastInsertId();
				echo"Evento pubblicato correttamente";
			}
			else
				print_r($stm->errorInfo()); 
				//echo 'errore';	
	    
    
	
?>