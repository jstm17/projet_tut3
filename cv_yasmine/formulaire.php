<?php  $db = new PDO('mysql:host=localhost;dbname=formulaire-cv', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8")); if ($_SERVER['REQUEST_METHOD'] == 'POST'){ $sql = "INSERT INTO contact (nom, prenom, email, comment) VALUES (:nom, :prenom, :email, :comment)"; $attributes = array(     'nom' => $_POST['nom'],     'prenom' => $_POST['prenom'],     'email' => $_POST['email'],     'comment' => $_POST['comment']   ); $stmt = $db->prepare($sql); $stmt->execute($attributes); $db = null;  } 
else{     
    http_response_code(500); } 
?>