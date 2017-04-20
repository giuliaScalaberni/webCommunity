<?php session_start()?>
<?php
	try{
		$connect=new PDO('mysql:dbname=quintaa_simu2015;localhost','root');
		//$connect = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
    $stmt = $connect->prepare("SELECT * FROM posts WHERE Ev_idEvento='".$_GET['idEvento']."' AND Ut_Nickname ='".$_SESSION['nickname']."'");
    if ($stmt->execute()) {
        echo json_encode($stmt->fetchAll());
    }
?>