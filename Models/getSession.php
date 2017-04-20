<?php session_start() ?>
<?php 

	//$_SESSION['log']='ok';
	//$_SESSION['nick']=$_GET['nickname'];
	$sessions= array('log' => $_SESSION['log'] ,'nickname' => $_SESSION['nickname']);
  echo json_encode($sessions);
?>