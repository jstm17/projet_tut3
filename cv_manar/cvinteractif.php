<?php
if ($_SERVER['REQUEST_METHOD']=='POST') {
    $link = new PDO('mysql:host=sqletud.u-pem.fr;dbname=mbassima_db', 'mbassima', 'DEVouCOM?2', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

$sql="INSERT INTO formulaire_de_contact(nom, email, objet, commentaire) VALUES (:nom, :email, :objet, :commentaire)";

        $attributes = array(
            'nom' => $_POST['nom'],
            'email' => $_POST['email'],
            'objet' => $_POST['objet'],
            'commentaire' => $_POST['commentaire']
        );

        $stmt=$link->prepare($sql);
        $stmt->execute($attributes);
        $link = null;

        header('Location:contact.html');
    } else{
        https_response_code(500);
    }

?>





