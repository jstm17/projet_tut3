<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $db = new PDO('mysql:host=localhost;dbname=mmitineraire', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$sql = "INSERT INTO formulaire_de_contact (nom, email, objet, commentaire) VALUES (:nom, :email, :objet, :commentaire)";

    $attributes = array(
      'nom' => $_POST['nom'],
      'email' => $_POST['email'],
      'objet' => $_POST['objet'],
      'commentaire' => $_POST['commentaire']
    );

    $stmt = $db->prepare($sql);

    $stmt->execute($attributes);

    $db = null;

    header('Location: projet2.php');
  } else {
    http_response_code(500);
  }
?>