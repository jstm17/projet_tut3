<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>MMItinéraire</title>
    <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap" rel="stylesheet">
    <link rel="icon" type="image/png" href="images/logo.png">
    <link rel="stylesheet" href="projet2.css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script>
    <script src="projet.js"></script>
</head>

<body id="body">

    <!-- rer 0 (Page d'accueil)-->
    <div class="rer0">

        <!-- header -->

        <p class="cv">Nos CV</p>
        <p class="contact">Contact</p>
        <p class="aide">?</p>
        <!-- logo -->
        <img class="logo" src="images/logo.png" alt="">
        <!-- rails -->
        <img class="railrouge" src="rails/railrouge.png" alt="">
        <img class="railbleu" src="rails/railbleu.png" alt="">
        <!-- Boutons sur les rails -->
        <button id="com" name="com" class="bouton1">COM'</button>
        <button class="bouton2">TECH'</button>

        <!-- Message présentation  -->
        <div class="mmitinéraire">
            <div class="présentation">
                <h2>MMItinéraire</h2>
                <p>Le DUT MMI (Métiers du Multimédia et de l'Internet) est une formation pluridisciplinaire qui recouvre
                    tous les champs du digital, de la réalisation de sites internet à l'animation de communautés, de la
                    création vidéo à la conception de contenus, en passant par la communication ou encore le marketing.
                    <br><br> Après l'obtention de son diplôme, l'étudiant.e peut poursuivre ses études et c'est là que
                    MMItinéraire intervient ! <br> Construis ton chemin en choisissant les voies qui te plaisent le plus
                    pour trouver la formation post-MMI qui est faite pour toi !</p>
                <p class="capté">En route !</p>

            </div>
            <div class="invisible"></div>
        </div>
    </div>

    <!-- rer 1 (page n°1 à gauche)-->
    <div class="rer1" style="position: relative">
        <div style="position: relative">
            <!-- Bouton retour -->
            <p class="retour1">Retour</p>
        </div>
        <!-- rail -->
        <div class="rails" style="position: relative">
            <img src="rails/railrouge2.png" class="railrouge2" alt="">
            <!-- Points noirs sur le rail -->
            <p class="pointnr p1" id="Marketing" domaine="marketing"></p>
            <p class="pointn2r p1" id="Gestion_de_projet" domaine="gestion"></p>
            <p class="pointn3r p1" id="Communication" domaine="communication"></p>
            <p class="pointn4r p1" id="Audiovisuel" domaine="audiovisuel"></p>
            <p class="pointn5r p1" id="Infographie" domaine="infographie"></p>
            <p class="pointn6r p1" id="Graphisme" domaine="graphisme"></p>
            <!-- Points blancs sur le rail-->
            <p class="pointb1r"></p>
            <p class="pointb2r"></p>
            <p class="pointb3r"></p>
            <p class="pointb4r"></p>
            <p class="pointb5r"></p>
            <p class="pointb6r"></p>
            <!-- Nom des domaines -->
            <p class="marketing domaine p1" id="Marketing" point="pointnr">MARKETING</p>
            <p class="communication domaine p1" id="Communication" point="pointn3r">COMMUNICATION</p>
            <p class="audiovisuel domaine p1" id="Audiovisuel" point="pointn4r">AUDIOVISUEL</p>
            <p class="gestion domaine p1" id="Gestion_de_projet" point="pointn2r">GESTION <br>DE PROJET</p>
            <p class="infographie domaine p1" id="Infographie" point="pointn5r">INFOGRAPHIE</p>
            <p class="graphisme domaine p1" id="Graphisme" point="pointn6r"> GRAPHISME</p>
        </div>
    </div>

    <!-- rer 2 (page n°1 à droite-->
    <div class="rer2">
        <!-- Bouton retour -->
        <div style="position: relative" class="">
            <p class="retour2">Retour</p>
        </div>
        <!-- rail -->
        <div class="rails" style="position: relative">
            <img src="rails/railbleu2.png" class="railbleu2" alt="">
            <!-- Points noirs sur le rail -->
            <p class="pointnb p2" id="Réseaux" domaine="réseaux"></p>
            <p class="pointn2b p2" id="Algo_programmation" domaine="algo"></p>
            <p class="pointn3b p2" id="Base_de_données" domaine="base"></p>
            <p class="pointn4b p2" id="Intégration_web" domaine="intégration"></p>
            <p class="pointn5b p2" id="Sound_design" domaine="sound"></p>
            <!-- Points blancs sur le rail-->
            <p class="pointb1b"></p>
            <p class="pointb2b"></p>
            <p class="pointb3b"></p>
            <p class="pointb4b"></p>
            <p class="pointb5b"></p>
            <!-- Nom des domaines -->
            <p class="réseaux domaine p2" id="Réseaux" point="pointnb">RÉSEAUX</p>
            <p class="sound domaine p2" id="Sound_design" point="pointn5b">SOUND DESIGN</p>
            <p class="intégration domaine p2" id="Intégration_web" point="pointn4b"> INTÉGRATION <br> WEB</p>
            <p class="base domaine p2" id="Base_de_données" point="pointn3b">BASE DE DONNÉES</p>
            <p class="algo domaine p2" id="Algo_programmation" point="pointn2b">ALGO & <br> PROGRAMMATION</p>
        </div>
    </div>

    <!-- rer 3 (page n°2 à gauche) -->
    <div class="rer3">
        <!-- Bouton retour -->
        <div style="position: relative">
            <p class="retour3">Retour</p>
        </div>
        <!-- Rail écoles -->
        <div class="rails" style="position: relative">
            <img src="rails/railrouge3bas.png" class="railrouge3bas" alt="">
        </div>
        <!-- Rail licences -->
        <div class="rails" style="position: relative">
            <img src="rails/railrouge3haut.png" class="railrouge3haut" alt="">
        </div>
        <!-- Boutons sur les rails -->
        <button class="bouton3 boutons" id="boutons1">LICENCES PRO</button>
        <button class="bouton4 boutons" id="boutons2">BACHELOR</button>
    </div>

    <!-- rer 4 (page n°2 à droite) -->
    <div class="rer4">
        <!-- Bouton retour -->
        <div style="position: relative" class="">
            <p class="retour4">Retour</p>
        </div>
        <!-- Rail écoles -->
        <div class="rails" style="position: relative">
            <img src="rails/railbleu3bas.png" class="railbleu3bas" alt="">
        </div>
        <!-- Rail licences -->
        <div class="rails" style="position: relative">
            <img src="rails/railbleu3haut.png" class="railbleu3haut" alt="">
        </div>
        <!-- Boutons sur les rails -->
        <button class="bouton5 boutons" id="boutons3">LICENCES PRO</button>
        <button class="bouton6 boutons" id="boutons4">BACHELOR</button>
    </div>

    <!-- Page des cv -->
    <div class="rercv" style="position: relative;">
        <!-- Bouton accueil -->
        <p class="accueil2">Accueil</p>
        <img class="cvtrain" src="images/train.png" alt="">
        <div class="persojulie" id="persojulie"></div>
        <div class="persomanar" id="persomanar"></div>
        <div class="persostef" id="persostef"></div>
        <div class="persoyasmine" id="persoyasmine"></div>
        <!-- Phrase -->
        <p class="jetez">Jetez un oeil à nos CV !</p>
        <!-- Logo MMItinéraire -->
        <img class="logocv" src="images/logo.png" alt="">
        <!-- CV Julie -->
        <div class="persojuliecv" id="persomanarcv">
            <p class="julie">Julie SAINT MARTIN</p>
            <a href="cv_julie/cv.pdf" target="_blank" class="cv1julie">CV papier</a>
            <a href="cv_julie/index.php" target="_blank" class="cv2julie">CV interactif</a>
        </div>
        <!-- CV Manar -->
        <div class="persomanarcv" id="persojuliecv">
            <p class="manar">Manar BASSIMANE</p>
            <a href="cv_manar/CV_manar.pdf" class="cv1manar" target="_blank">CV papier</a>
            <a href="https://etudiant.u-pem.fr/~mbassima/CVinteractif/" class="cv2manar" target="_blank">CV interactif</a>
        </div>
        <!-- CV Steff -->
        <div class="persostefcv" id="persoyasminecv">
            <p class="stef">Stef MILLS</p>
            <a href="cv_stef/cv-mills-stef.pdf" class="cv1stef" target="_blank">CV papier</a>
            <a href="cv_stef/cv-numerique.html" class="cv2stef" target="_blank">CV interactif</a>
        </div>
        <!-- CV Yasmine -->
        <div class="persoyasminecv" id="persostefcv">
            <p class="yasmine">Yasmine KOURICHI</p>
            <a href="cv_yasmine/CV-Yasmine.pdf" target="_blank" class="cv1yasmine">CV papier</a>
            <a href="cv_yasmine/index.html" target="_blank" class="cv2yasmine">CV interactif</a>
        </div>
    </div>

    <?php
     $link = new PDO('mysql:host=sqletud.u-pem.fr;dbname=jsaint02_db', 'jsaint02', 'mmitineraire', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

    if(isset($_GET['success'])){
        echo('<script>alert("Votre message a bien été pris en compte !")</script>');
      }?>
    <!-- Page formulaire -->
    <form action="projet3.php" method="post" style="position: relative;" class="rerformulaire">
        <!-- Bouton accueil -->
        <p class="accueil">Accueil</p>
        <!-- Phrase -->
        <p class="contactez">Contactez nous !</p>
        <div class="borne">
        </div>
        <!-- Logo MMItinéraire -->
        <img class="logoformulaire" src="images/logo.png" alt="">
        <!-- Champs à remplir -->
        <div class="borneecran"><input type="text" name="nom" id="nom" class="formulairenom" required
                placeholder="NOM Prénom">
            <input type="email" name="email" id="email" class="formulairenom formulaireemail" required
                placeholder="Email">
            <input type="text" name="objet" id="objet" class="formulairenom formulaireobjet" required
                placeholder="Objet">
            <textarea name="commentaire" id="" cols="50" rows="50" class="formulairenom formulairecom" required
                placeholder="Commentaire"></textarea>
            <!-- Bouton envoyer -->
            <button type="submit" class="envoyer">Envoyer !</button></div>
    </form>

    <!-- rer 4 licences (page n°3 à droite)  -->
    <div class="rer4licence liste boutons3">

        <div style="position: relative;">
            <!-- Bouton retour -->
            <button class="retour4licence" id="top">Retour</button>

            <!-- Rail -->
            <div class="rails" style="position: relative">
                <img src="rails/railbleulicence3.png" class="railbleulicence" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence2" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence3" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence4" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence5" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence6" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence7" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence8" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence9" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence10" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence11" alt="">
                <img src="rails/raillicencesbleu.png" class="railbleulicence12" alt="">

            </div>

        </div>

        <?php

// Liste des formations tech licences
$sql3 = "SELECT domaine.nom AS domaines, formation.nom, formation.matieres_travaillees, formation.debouches, formation.URL FROM formation, domaine, propose WHERE domaine.voie='tech' AND domaine.id=propose.id_propose_domaine AND formation.id=propose.id_propose_formation AND formation.type_de_formation='licence pro'";
$req3 = $link -> prepare($sql3);
$req3 -> execute();

echo "<ul>";
while($data3 = $req3 -> fetch()){
// Les billets
echo'  
<div class="billet billetlicence billet-'.$data3["domaines"].'">
    <h2 class="licencenom">'.$data3["nom"].'</h2>
    <p class="matieres"><span class="titrematiere">Matières étudiées :</span> <br>'.$data3["matieres_travaillees"].'</p>
    <p class="debouches"><span class="titrematiere">Débouchés :</span> <br>'.$data3["debouches"].'</p>
    <p class="formation"><span class="titrematiere">Mode de formation</span> : Alternance</p>
    <div class="rond1"><div class="rond1bis"></div></div>
    <div class="rond2"></div>
    <div class="zip"></div>
    <a class="url" href='.$data3["URL"].' target="_blank">En savoir plus</a>
    <img class="logobillet" src="images/logo.png" alt=""> 
    <div class="bandeblanche"></div>
    <img class="code" src="images/code.png" alt="">
</div>';


}
$req3 = null;
echo "</ul>
<button class='remonter_lic_tech'>Remonter</button>
</div>"; 

// rer 3 écoles (page n°3 à gauche) 
echo'  <div class="rer3licence liste boutons1">
<div style="position: relative;">
    <button class="retour3licence">Retour</button>
    <div class="rails" style="position: relative">
        <img src="rails/railrougelicence3.png" class="railrougelicence" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence2" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence3" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence4" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence5" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence6" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence7" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence8" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence9" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence10" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence11" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence12" alt="">
        <img src="rails/raillicencesrouge.png" class="railrougelicence13" alt="">

    </div>
</div>';

// Liste des formations com licences
$sql4 = "SELECT domaine.nom AS domaines, formation.nom, formation.matieres_travaillees, formation.debouches, formation.URL FROM formation, domaine, propose WHERE domaine.voie='com' AND domaine.id=propose.id_propose_domaine AND formation.id=propose.id_propose_formation AND formation.type_de_formation='licence pro'";
$req4 = $link -> prepare($sql4);
$req4 -> execute();

echo "<ul>";
while($data4 = $req4 -> fetch()){
// Les billets
echo'  
<div class="billet billetlicence2 billet-'.$data4["domaines"].'">
    <h2 class="licencenom2">'.$data4["nom"].'</h2>
    <p class="matieres"><span class="titrematiere">Matières étudiées :</span> <br>'.$data4["matieres_travaillees"].'</p>
    <p class="debouches"><span class="titrematiere">Débouchés :</span> <br>'.$data4["debouches"].'</p>
    <p class="formation"><span class="titrematiere">Mode de formation</span> : Alternance</p>
    <div class="rond1"><div class="rond1bis"></div></div>
    <div class="rond2"></div>
    <div class="zip"></div>
    <a class="url" href='.$data4["URL"].' target="_blank">En savoir plus</a>
    <img class="logobillet" src="images/logo.png" alt=""> 
    <div class="bandeblanche"></div>
    <img class="code" src="images/code.png" alt="">
</div>';


}
$req4 = null;
echo "</ul>
<button class='remonter_lic_com'>Remonter</button></div>"; 

// rer 4 écoles (page n°3 à droite) 

 echo'   <div class="rer4ecole liste boutons4">
        <div  style="position: relative;">
        <button class="retour4ecole">Retour</button>
        <div  class="rails" style="position: relative">
            <img src="rails/railvert.png" class="railvert" alt="">
            <img src="rails/railvert.png" class="railvert2" alt="">
            <img src="rails/railvert.png" class="railvert3" alt="">
            <img src="rails/railvert.png" class="railvert4" alt="">
            <img src="rails/railvert.png" class="railvert5" alt="">';

// Listes déroulantes qui permettent de trier les billets
// Listes déroulantes localisation
 echo'      <form>
            <select class="liste_déroulante_tech liste_déroulante_localisation_tech_Intégration_web" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous
            <option>Bordeaux
            <option>Grenoble
            <option>Lille
            <option>Nantes
            <option>Paris 
            <option>Rennes
            <option>Strasbourg
            <option>Toulouse
            </select>

            <select class="liste_déroulante_tech liste_déroulante_localisation_tech_Réseaux" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous
            <option>Lyon     
            <option>Montrouge  
            <option>Palaiseau
            <option>Paris
            <option>Saint-Étienne
            </select>
            
            <select class="liste_déroulante_tech liste_déroulante_localisation_tech_Sound_design" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Marseille
            <option>Paris
            <option>Saint-Denis
            </select>
            </form>

            <select class="liste_déroulante_tech liste_déroulante_localisation_tech_Algo_programmation" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Angoulême
            <option>Montferrier-sur-Lez
            <option>Montréal
            <option>Montreuil
            <option>Nice
            <option>Paris
            <option>Pune
            <option>Valenciennes
            </select>
            </form>

            <select class="liste_déroulante_tech liste_déroulante_localisation_tech_Base_de_données" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Paris
            </select>';

// Listes déroulantes établissement
 echo'           <select class="liste_déroulante_tech liste_déroulante_établissement liste_déroulante_établissement_tech_Intégration_web" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Com\'Art
            <option>Efet Photographie
            <option>Goblins
            <option>Ican
            <option>ICAN Design
            <option>Itecom Art Design
            <option>L\'École de design Nantes-Atlantique
            <option>MJM Graphic Design
            <option>Supcréa
            </select>

            <select class="liste_déroulante_tech liste_déroulante_établissement liste_déroulante_établissement_tech_Réseaux" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>CAMPUS SCIENCES-ULYON
            <option>EFFICOM
            <option>Institut mines-technologie
            <option>Iris
            <option>IRUP
            <option>ITIC
            </select>

            <select class="liste_déroulante_tech liste_déroulante_algo liste_déroulante_établissement_tech_Algo_programmation" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>ESGI
            <option>Goblins
            <option>HETIC
            <option>IIM
            <option>Iris
            <option>Isart Digital
            <option>Itecom Art Design
            <option>ITIC
            <option>My digital School
            <option>Objectif 3D
            <option>Sup de Web
            <option>Supinfogame-Rubika
            </select>

            <select class="liste_déroulante_tech liste_déroulante_algo liste_déroulante_établissement_tech_Base_de_données" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Iris
            </select>

            <select class="liste_déroulante_tech liste_déroulante_établissement liste_déroulante_établissement_tech_Sound_design" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Eicar
            <option>Isart Digital
            <option>Les Ateliers de l\'image et du son
            </select>';

// Listes déroulantes mode de formation
 echo'           <select class="liste_déroulante_tech liste_déroulante_mode_inté liste_déroulante_mode_formation_tech_Intégration_web" name="nom" size="1">
            <option class="titre_liste">Mode de formation</option>
            <option>Tous      
            <option>Alternance
            <option>Alternance dès la 2e année
            <option>Continue
            <option>Initiale
            </select>

            <select class="liste_déroulante_tech liste_déroulante_mode liste_déroulante_mode_formation_tech_Réseaux liste_déroulante_mode_formation_tech_Algo_programmation liste_déroulante_mode_formation_tech_Base_de_données liste_déroulante_mode_formation_tech_Sound_design" name="nom" size="1">
            <option class="titre_liste">Mode de formation</option>
            <option>Tous      
            <option>Alternance
            <option>Initiale
            </select>
            </form>

            </form>
        </div>
    </div>';

// Liste des formations tech écoles   
 $alternance2 = 'Alternance dès la 2e année';
 $alternance = 'Alternance';
 $alternance_init = 'Initiale';
 $alternance_cont = 'Continue';

    $sql = "SELECT domaine.nom AS domaines, formation.nom, formation.matieres_travaillees, formation.debouches, formation.URL,formation.formation_alternance, formation.formation_alternance_2, formation.formation_initiale, formation.formation_continue, GROUP_CONCAT(etablissement.nom SEPARATOR ' / ') AS etablissement, localisation.ville, localisation.code_postal, GROUP_CONCAT(localisation.ville,' - ',localisation.code_postal SEPARATOR ' / ') AS lieu FROM formation, domaine, propose, heberge, se_situe, etablissement, localisation WHERE domaine.voie='tech' AND domaine.id=propose.id_propose_domaine AND formation.id=propose.id_propose_formation AND formation.type_de_formation='ecole' AND formation.id=heberge.id_heberge_formation AND id_heberge_etablissement =etablissement.id AND formation.id=id_se_situe_formation AND id_se_situe_localisation=localisation.id GROUP BY formation.nom";
$req = $link -> prepare($sql);
$req -> execute();
    echo "<ul>";

//Les billets
// Système pour remplir le champs mode de formation sur les billets
    while($data = $req -> fetch()){
    $modes_formation = '';

    if ($data["formation_alternance"] !== '0'){
        $modes_formation = $modes_formation.$alternance ;
    }
    if ($data["formation_alternance_2"] !== '0'){
        if($modes_formation !== ''){
        $modes_formation = $modes_formation.' / ' ;
        }
        $modes_formation = $modes_formation.$alternance2 ;
    }
    if ($data["formation_continue"] !== '0'){
        if($modes_formation !== ''){
            $modes_formation = $modes_formation.' / ' ;
            }
            $modes_formation = $modes_formation.$alternance_cont ;
    }
    if ($data["formation_initiale"] !== '0'){
        if($modes_formation !== ''){
            $modes_formation = $modes_formation.' / ' ;
            }
            $modes_formation = $modes_formation.$alternance_init ;
    }
    
    echo '<div class="billet billetecole billet-'.$data["domaines"].' '.$data["lieu"].' '.$data["etablissement"].' '.$modes_formation.'">
        <h2 class="licencenom">'.$data["nom"].'</h2>
        <p class="matieres2"><span class="titrematiere">Matières étudiées :</span> <br>'.$data["matieres_travaillees"].'</p>
        <p class="debouches2"><span class="titrematiere">Débouchés :</span> <br>'.$data["debouches"].'</p>
        <p class="formation2"><span class="titrematiere">Mode de formation : </span><br>'.$modes_formation.'</p>';

        echo'<div class="rond1"><div class="rond1bis"></div></div>
        <div class="rond2"></div> 
        <div class="zip"></div>
        <p class="etablissement"><span class="titrematiere">Etablissement : </span><br> '.$data["etablissement"].'</p>
        <p class="localisation"><span class="titrematiere">Localisation : </span><br>'.$data["lieu"].'</p>
        <a class="url" href='.$data["URL"].' target="_blank">En savoir plus</a>
        <img class="logobillet" src="images/logo.png" alt=""> 
        <div class="bandeblanche"></div>
        <img class="code" src="images/code.png" alt="">
    </div>';
    
    }
    $req = null;
    echo "</ul>
    <button class='remonter_eco_tech'>Remonter</button> </div>";

    // rer 3 licences (page n°3 à droite) 
 echo'  <div class="rer3ecole liste boutons2">
 <div style="position: relative;">
     <button class="retour3ecole">Retour</button>
     <div class="rails" style="position: relative">
         <img src="rails/railjaune.png" class="railjaune" alt="">
         <img src="rails/railjaune.png" class="railjaune2" alt="">
         <img src="rails/railjaune.png" class="railjaune3" alt="">
         <img src="rails/railjaune.png" class="railjaune4" alt="">
         <img src="rails/railjaune.png" class="railjaune5" alt="">
         <img src="rails/railjaune.png" class="railjaune6" alt="">
         <img src="rails/railjaune.png" class="railjaune7" alt="">
         <img src="rails/railjaune.png" class="railjaune8" alt="">
         <img src="rails/railjaune.png" class="railjaune9" alt="">
         <img src="rails/railjaune.png" class="railjaune10" alt="">
         <img src="rails/railjaune.png" class="railjaune11" alt="">
         <img src="rails/railjaune.png" class="railjaune12" alt="">
         <img src="rails/railjaune.png" class="railjaune13" alt="">
         <img src="rails/railjaune.png" class="railjaune14" alt="">
         <img src="rails/railjaune.png" class="railjaune15" alt="">
         <img src="rails/railjaune.png" class="railjaune16" alt="">
         <img src="rails/railjaune.png" class="railjaune17" alt="">
         <img src="rails/railjaune.png" class="railjaune18" alt="">
         <img src="rails/railjaune.png" class="railjaune19" alt="">
         <img src="rails/railjaune.png" class="railjaune20" alt="">
         <img src="rails/railjaune.png" class="railjaune21" alt="">
         <img src="rails/railjaune.png" class="railjaune22" alt="">
         <img src="rails/railjaune.png" class="railjaune23" alt="">
         <img src="rails/railjaune.png" class="railjaune24" alt="">
         <img src="rails/railjaune.png" class="railjaune25" alt="">
         <img src="rails/railjaune.png" class="railjaune26" alt="">
         <img src="rails/railjaune.png" class="railjaune27" alt="">
         <img src="rails/railjaune.png" class="railjaune28" alt="">
         <img src="rails/railjaune.png" class="railjaune29" alt="">
         <img src="rails/railjaune.png" class="railjaune30" alt="">
         <img src="rails/railjaune.png" class="railjaune31" alt="">';

// Listes déroulantes qui permettent de trier les billets
echo'         <form>
            <select class="liste_déroulante_com liste_déroulante_localisation_com_Marketing" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous
            <option>Aix-en-Provence
            <option>Aubervilliers
            <option>Dunkerque
            <option>Lille
            <option>Lyon 
            <option>Montreuil
            <option>Nice
            <option>Paris
            <option>Reims
            <option>Toulon
            <option>Valence
            </select>

            <select class="liste_déroulante_com liste_déroulante_localisation_com_Gestion_de_projet" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous
            <option>Aix-en-Provence     
            <option>Bordeaux  
            <option>Dunkerque
            <option>Lille
            <option>Nantes
            <option>Paris
            <option>Toulon
            </select>
            
            <select class="liste_déroulante_com liste_déroulante_localisation_com_Communication" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Lyon
            <option>Nancy
            <option>Paris
            </select>
            </form>

            <select class="liste_déroulante_com liste_déroulante_localisation_com_Audiovisuel" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Bordeaux
            <option>Lille
            <option>Marseille
            <option>Nantes
            <option>Paris
            <option>Rennes
            <option>Saint-Denis
            <option>Strasbourg
            <option>Toulouse
            </select>
            </form>

            <select class="liste_déroulante_com liste_déroulante_localisation_com_Infographie" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Bordeaux
            <option>Grenoble
            <option>Lille
            <option>Montpellier
            <option>Nantes
            <option>Nice
            <option>Paris
            <option>Rennes
            <option>Strasbourg
            <option>Toulouse
            </select>

            <select class="liste_déroulante_com liste_déroulante_localisation_com_Graphisme" name="nom" size="1">
            <option class="titre_liste">Localisation</option>
            <option>Tous      
            <option>Aix-en-Provence
            <option>Angoulême
            <option>Annecy
            <option>Aubervilliers
            <option>Béziers
            <option>Bordeaux
            <option>Caen
            <option>Clermont-Ferrand
            <option>Grenoble
            <option>Istres
            <option>Labège
            <option>Lille
            <option>Lyon
            <option>Marseille
            <option>Meylan
            <option>Montferrier-sur-Lez
            <option>Montpellier
            <option>Montréal
            <option>Nancy
            <option>Nantes
            <option>Paris
            <option>Pune
            <option>Rennes
            <option>Sèvres
            <option>Strasbourg
            <option>Toulouse
            <option>Tours
            <option>Valenciennes
            <option>Villeurbanne
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Marketing" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Bellecour école
            <option>Digital College
            <option>Digital School Paris
            <option>ECITV
            <option>Escen
            <option>HETIC
            <option>IPAG
            <option>Itecom Art Design
            <option>Maestris Sup
            <option>My digital School
            <option>Sup de Web
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Gestion_de_projet" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Com\'Art
            <option>ECV
            <option>EEMI
            <option>ESD
            <option>IESA Multimédia
            <option>Maestris Sup
            <option>My digital School
            <option>Sup de Web
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Communication" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Com\'Art
            <option>Digital College
            <option>Ecole de Condé
            <option>Efet Photographie
            <option>IIM
            <option>Institut Artline
            <option>PSVA
            <option>Studio Créa Paris
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Audiovisuel" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>CIFACOM
            <option>CLCF
            <option>Com\'Art
            <option>Eicar
            <option>Isart Digital
            <option>Itecom Art Design
            <option>Les Ateliers de l\'image et du son 
            <option>MJM Graphic Design
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Infographie" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>Com\'Art
            <option>Efet Photographie
            <option>ICAN Design
            <option>Institut Artline
            <option>Itecom Art Design
            <option>MJM Graphic Design
            <option>Studio M
            <option>Supcréa
            </select>

            <select class="liste_déroulante_com liste_déroulante_établissement_com liste_déroulante_établissement_com_Graphisme" name="nom" size="1">
            <option class="titre_liste">Établissement</option>
            <option>Tous      
            <option>AGR L\'école de l\'image
            <option>Autograf
            <option>Axe Sud
            <option>Bellecour école
            <option>Com\'Art
            <option>E-artsup
            <option>Ecole Brassart
            <option>Ecole Presqu\'île
            <option>Ecran
            <option>ECV
            <option>ESDAC
            <option>ESDL
            <option>Ican
            <option>ICAN Design
            <option>IIM
            <option>Institut Artline
            <option>Isart Digital
            <option>Itecom Art Design
            <option>LIM\'ART
            <option>LISAA
            <option>L\'école de design Nantes-Atlantique
            <option>MJM Graphic Design
            <option>Objectif 3D
            <option>Sea
            <option>Strate Ecole de design
            <option>Studio Créa Paris
            <option>Studio M
            <option>Supcréa
            <option>Supinfogame-Rubika
            </select>

            <select class="liste_déroulante_com liste_déroulante_mode_com liste_déroulante_mode_formation_com_Infographie
            liste_déroulante_mode_formation_com_Graphisme" name="nom" size="1">
            <option class="titre_liste">Mode de formation</option>
            <option>Tous      
            <option>Alternance
            <option>Alternance dès la 2e année
            <option>Continue
            <option>Initiale
            </select>

            <select class="liste_déroulante_com liste_déroulante_mode_com liste_déroulante_mode_formation_com_Marketing liste_déroulante_mode_formation_com_Gestion_de_projet liste_déroulante_mode_formation_com_Communication liste_déroulante_mode_formation_com_Audiovisuel" name="nom" size="1">
            <option class="titre_liste">Mode de formation</option>
            <option>Tous      
            <option>Alternance
            <option>Initiale
            </select>
            </form>

     </div>
 </div>';

 // Liste des formations com écoles
 $alternance2 = 'Alternance dès la 2e année';
 $alternance = 'Alternance';
 $alternance_init = 'Initiale';
 $alternance_cont = 'Continue';

$sql5 = "SELECT domaine.nom AS domaines, formation.nom, formation.matieres_travaillees, formation.debouches, formation.URL,formation.formation_alternance, formation.formation_alternance_2, formation.formation_initiale, formation.formation_continue, GROUP_CONCAT(etablissement.nom SEPARATOR ' / ') AS etablissement, localisation.ville, localisation.code_postal, GROUP_CONCAT(localisation.ville,' - ',localisation.code_postal SEPARATOR ' / ') AS lieu FROM formation, domaine, propose, heberge, se_situe, etablissement, localisation WHERE domaine.voie='com' AND domaine.id=propose.id_propose_domaine AND formation.id=propose.id_propose_formation AND formation.type_de_formation='ecole' AND formation.id=heberge.id_heberge_formation AND id_heberge_etablissement =etablissement.id AND formation.id=id_se_situe_formation AND id_se_situe_localisation=localisation.id  GROUP BY formation.nom";
$req5 = $link -> prepare($sql5);
$req5 -> execute();
echo "<ul>";

//Les billets
// Système pour remplir le champs mode de formation sur les billets
while($data5 = $req5 -> fetch()){
$modes_formation = '';

if ($data5["formation_alternance"] !== '0'){
 $modes_formation = $modes_formation.$alternance ;
}
if ($data5["formation_alternance_2"] !== '0'){
 if($modes_formation !== ''){
 $modes_formation = $modes_formation.' / ' ;
 }
 $modes_formation = $modes_formation.$alternance2 ;
}
if ($data5["formation_continue"] !== '0'){
 if($modes_formation !== ''){
     $modes_formation = $modes_formation.' / ' ;
     }
     $modes_formation = $modes_formation.$alternance_cont ;
}
if ($data5["formation_initiale"] !== '0'){
 if($modes_formation !== ''){
     $modes_formation = $modes_formation.' / ' ;
     }
     $modes_formation = $modes_formation.$alternance_init ;
}

echo '<div class="billet billetecole2 billet-'.$data5["domaines"].' '.$data5["lieu"].' '.$data5["etablissement"].' '.$modes_formation.'">
 <h2 class="licencenom2">'.$data5["nom"].'</h2>
 <p class="matieres2"><span class="titrematiere">Matières étudiées :</span> <br>'.$data5["matieres_travaillees"].'</p>
 <p class="debouches2"><span class="titrematiere">Débouchés :</span> <br>'.$data5["debouches"].'</p>
 <p class="formation2"><span class="titrematiere">Mode de formation : </span><br>'.$modes_formation.'</p>';

 echo'<div class="rond1"><div class="rond1bis"></div></div>
 <div class="rond2"></div> 
 <div class="zip"></div>
 <p class="etablissement"><span class="titrematiere">Etablissement : </span><br> '.$data5["etablissement"].'</p>
 <p class="localisation"><span class="titrematiere">Localisation : </span><br>'.$data5["lieu"].'</p>
 <a class="url" href='.$data5["URL"].' target="_blank">En savoir plus</a>
 <img class="logobillet" src="images/logo.png" alt=""> 
 <div class="bandeblanche"></div>
 <img class="code" src="images/code.png" alt="">
</div>';

};
$req5 = null;
echo "</ul>    <button class='remonter_eco_com'>Remonter</button>
</div>";
    ?>
</body>

</html>