<?php session_start()?>
<?php
try{
		//$connect=new PDO('mysql:dbname=quintaa_login;localhost','root','miomio');
		$connect=new PDO('mysql:dbname=quintaa_simu2015;localhost','root');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
	if((isset($_GET['nickname']))&&(isset($_GET['password']))){
		$nickname = ($_GET['nickname']);
		//$password=md5($_GET['password']);
		$password=(md5($_GET['password']));
		$sql = "SELECT * FROM utenti WHERE nickname= '$nickname' and password='$password'";
		$stm=$connect->prepare($sql);
		if ($stm->execute()){
		if ($data = $stm->fetch()){
			$row=$stm->rowCount();
			if ($row> 0) {
				$_SESSION['log']='ok';
				$_SESSION['nickname']=$_GET['nickname'];
				$sessions= array('log' => 'ok' ,'nickname' => $_SESSION['nickname']);
        echo json_encode($sessions);
				echo 'ok';
			}
			else{echo 'error row';}
		}
		else{echo 'error fetch';}
	}
		else {
			echo 'execute errore';}
	
	}
	else{echo 'error set';}
?>