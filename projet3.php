<?php
  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $link = new PDO('mysql:host=sqletud.u-pem.fr;dbname=jsaint02_db', 'jsaint02', 'mmitineraire', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$sql = "INSERT INTO formulaire_de_contact (nom, email, objet, commentaire) VALUES (:nom, :email, :objet, :commentaire)";

    $attributes = array(
      'nom' => $_POST['nom'],
      'email' => $_POST['email'],
      'objet' => $_POST['objet'],
      'commentaire' => $_POST['commentaire']
    );

    $stmt = $link->prepare($sql);

    $stmt->execute($attributes);

    $link = null;

    header('Location: index.php?success=true');

  } else {
    http_response_code(500);
  }
?>