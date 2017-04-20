<?php session_start()?>
<?php
	try{
		$connect=new PDO('mysql:dbname=quintaa_simu2015;localhost','root');
		//$connect = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
$stm=$connect->prepare("INSERT INTO utenti ( nickname, nome, cognome, email, password, idLuogo) VALUES (:nick, :nome, :cognome, :email, :password, :idLuogo)");		
			$stm->bindValue(':nick',$_POST['nickname']);
			$stm->bindValue(':nome',$_POST['nome']);
			$stm->bindValue(':cognome',$_POST['cognome']);
			$stm->bindValue(':email',$_POST['email']);
			$stm->bindValue(':password',md5($_POST['password']));
			$stm->bindValue(':idLuogo',$_POST['idLuogo']);
			

		
			if($stm->execute())
			{
				$_SESSION['log']='ok';
        $_SESSION['nickname']=$_POST['nickname'];
        $sessions= array('log' => 'ok' ,'nickname' => $_SESSION['nickname']);
        echo json_encode($sessions);
			}
			else{
			
          if ($stm->errorInfo()[1]==1062){
           echo 'email or nick already in use';
					}
            else 
              	echo 'an error occurred';
			
					}
				//echo 'errore';	
	    
    
	
?>