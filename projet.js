$(document).ready(function () {
    // Message pour prévenir qu'il faut utiliser chrome
    var navigateur = navigator.userAgent;
    if ((navigateur.indexOf("Chrome") >= 1 && navigateur.indexOf("Edge") <= 0)){
    } else{
        alert("Pour une meilleure expérience, utilisez le navigateur Chrome !")
    }
    //Actions qd on clique sur le bouton "En route !"
    $(".capté").click(function () {
        $(".présentation").hide();
        $(".mmitinéraire").hide();
    })
    //Actions qd on clique sur le bouton aide
    $(".aide").click(function () {
        $(".présentation").show();
        $(".mmitinéraire").show();
    })
    //Animations des boutons cv, contact, aide... qd on les survole
    $(".cv,.contact,.aide,.capté,.accueil,.accueil2,.envoyer,.cv1julie,.cv2julie,.cv1manar,.cv2manar,.cv1stef,.cv2stef,.cv1yasmine,.cv2yasmine").hover(function () {
        $(this).addClass("cvhover")
        $(this).removeClass("cvmouseout contactmouseout")
    })
    //Animations des boutons cv, aide... qd on ne les survole plus
    $(".cv,.aide,.accueil,.accueil2,.envoyer,.cv1julie,.cv2julie,.cv1manar,.cv2manar,.cv1stef,.cv2stef,.cv1yasmine,.cv2yasmine").mouseout(function () {
        $(this).removeClass("cvhover")
        $(this).addClass("cvmouseout")
    })
    //Animations des boutons conctact qd on ne les survole plus
    $(".contact").mouseout(function () {
        $(this).removeClass("cvhover")
        $(this).addClass("contactmouseout")
    })
    $(".capté").mouseout(function(){
        $(this).removeClass("cvhover")
        $(this).addClass("captémouseout")
    })
    // Pour que les domaines soient penchés 
    $(".domaine").addClass("domaine2")

    // Animations qd on survole le rail rouge n°1 
    $(".railrouge").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".bouton1").addClass("boutonhover")
        $(".bouton1").removeClass("boutonmouseout")
    })
    // Animations qd on ne survole plus le rail rouge n°1 
    $(".railrouge").mouseout(function () {
        $(this).removeClass("railhover")
        $(".bouton1").removeClass("boutonhover")
        $(this).addClass("railmouseout")
        $(".bouton1").addClass("boutonmouseout")
    })

    // Animations qd on survole le bouton "com"
    $(".bouton1").hover(function () {
        $(".railrouge").addClass("railhover")
        $(".railrouge").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
    })
    // Animations qd on ne survole plus le bouton "com"
    $(".bouton1").mouseout(function () {
        $(this).addClass("boutonmouseout")
        $(this).removeClass("boutonhover2")
    })
    // Actions et animations qd on clique sur le bouton "com"
    $(".bouton1").click(function () {
        $(".rer0").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s"
        })

        $(".rer1").css({
            "transform": "translate(-15%)",
            "transition": "ease, transform 1.5s"
        })

        $(".railrouge2").css({
            "-webkit-filter": "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
            "filter": "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
        })

        $(".railrouge").addClass("railclick")
        $(".railrouge").removeClass("railhover railmouseout")
    });

    // Animations qd on survole le rail bleu n°1 
    $(".railbleu").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".bouton2").addClass("boutonhover")
        $(".bouton2").removeClass("boutonmouseout")
    })
    // Animations qd on nz survole plus le rail bleu n°1 
    $(".railbleu").mouseout(function () {
        $(this).removeClass("railhover")
        $(".bouton2").removeClass("boutonhover")
        $(this).addClass("railmouseout")
        $(".bouton2").addClass("boutonmouseout")
    })

    // Animations qd on survole le bouton "tech"
    $(".bouton2").hover(function () {
        $(".railbleu").addClass("railhover")
        $(".railbleu").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
    })
    // Animations qd on ne survole plus le bouton "tech"
    $(".bouton2").mouseout(function () {
        $(this).addClass("boutonmouseout")
        $(this).removeClass("boutonhover2")
    })
    // Actions et animations qd on clique sur le bouton "tech"
    $(".bouton2").click(function () {
        $(".rer0").css({
            "transform": "translate(-100%)",
            "transition": "ease, transform 1.5s"
        });

        $(".rer2").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s"
        });

        $(".railbleu").addClass("railclick")
        $(".railbleu").removeClass("railhover railmouseout")
        $(".railbleu2").css({
            "-webkit-filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
    });


    // Actions et animations qd on clique sur le retour n°1 rouge
    $(".retour1").click(function () {
        $(".rer0").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })
        $(".rer1").css({
            "transform": "translate(-115%)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge2").css({
            "-webkit-filter": "saturate(100%) drop-shadow((-5x 5px 5px #666666)",
            "filter": "saturate(100%) drop-shadow(-5px 5px 5px #666666)",
        })

        $(".railrouge").removeClass("railclick")
        $(".railrouge").removeClass("railhover")
    });

    // Actions et animations qd on clique sur le retour n°1 bleu
    $(".retour2").click(function () {
        $(".rer0").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })
        $(".rer2").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s",
        });

        $(".railbleu2").css({
            "-webkit-filter": "saturate(100%) drop-shadow(5px 5px 5px #666666)",
            "filter": "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })

        $(".railbleu").removeClass("railclick railhover railombre")
    });

    // Rail tech
    // Animations des domaines tech et de leur point noir qd on survole les domaines
    $(".réseaux,.algo,.base,.intégration,.sound").hover(function () {
        var point = $(this).attr("point")
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
        $("." + point).addClass("pointhover")
    })
    // Animations des domaines tech et de leur point noir qd on ne survole plus les domaines
    $(".réseaux,.algo,.base,.intégration,.sound").mouseout(function () {
        var point = $(this).attr("point")
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $("." + point).removeClass("pointhover")
    })

    // Animationsdes domaines tech et de leur point noir qd on survole le point noir
    $(".pointnb,.pointn2b,.pointn3b,.pointn4b,.pointn5b").hover(function () {
        var domaine = $(this).attr("domaine")
        $("." + domaine).removeClass("domaine2")
        $("." + domaine).addClass("domainehover")
        $(this).addClass("pointhover")
    });
    // Animations des domaines tech et de leur point noir qd on ne survole plus le point noir
    $(".pointnb,.pointn2b,.pointn3b,.pointn4b,.pointn5b").mouseout(function () {
        var domaine = $(this).attr("domaine")
        $("." + domaine).addClass("domaine2")
        $("." + domaine).removeClass("domainehover")
        $(this).removeClass("pointhover")
    });

    //Rail com
    // Animations des domaines com et de leur point noir qd on survole les domaines
    $(".marketing,.gestion,.communication,.audiovisuel,.infographie,.graphisme").hover(function () {
        var point = $(this).attr("point")
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $("." + point).addClass("pointhover")
    })
    // Animations des domaines com et de leur point noir qd on ne survole plus les domaines
    $(".marketing,.gestion,.communication,.audiovisuel,.infographie,.graphisme").mouseout(function () {
        var point = $(this).attr("point")
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $("." + point).removeClass("pointhover")
    })

    // Animations des domaines com et de leur point noir qd on survole le point noir
    $(".pointnr,.pointn2r,.pointn3r,.pointn4r,.pointn5r,.pointn6r").hover(function () {
        var domaine = $(this).attr("domaine")
        $("." + domaine).removeClass("domaine2")
        $("." + domaine).addClass("domainehover")
        $(this).addClass("pointhover")
    });
    // Animations des domaines com et de leur point noir qd on ne survole plus le point noir
    $(".pointnr,.pointn2r,.pointn3r,.pointn4r,.pointn5r,.pointn6r").mouseout(function () {
        var domaine = $(this).attr("domaine")
        $("." + domaine).addClass("domaine2")
        $("." + domaine).removeClass("domainehover")
        $(this).removeClass("pointhover")
    });

    // Action et animations qd on clique sur les points ou les domaines com
    $(".p1").click(function () {
        $(".rer1").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer3").css({
            "transform": "translate(-10%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer3ecole").css({
            "transform": "translate(-33.1%, 66vw)",
            "transition": "ease, transform 1.5s"
        })

        $(".railrouge3haut").addClass("railsaturate")
        $(".railrouge3haut").removeClass("railmouseout")
        $(".railrouge3bas").addClass("railmouseout")
        $(".bouton3").addClass("boutonhover3")
        $(".billet").hide()

    });
    // Action et animations qd on clique sur les points ou les domaines tech
    $(".p2").click(function () {
        $(".rer2").css({
            "transform": "translate(-107.2%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer4").css({
            "transform": "translate(-1%)",
            "transition": "ease, transform 1.5s"
        })
        $(".rer4ecole").css({
            "transform": "translate(48.8%, 66vw)",
            "transition": "ease, transform 1.5s"
        })

        $(".railbleu3haut").addClass("railsaturate")
        $(".railbleu3haut").removeClass("railmouseout")
        $(".railbleu3bas").addClass("railmouseout")
        $(".bouton5").addClass("boutonhover5")

    });

    // masque la premiere ligne des listes déroulantes
    $(".liste_déroulante_tech option.titre_liste,.liste_déroulante_com option.titre_liste").hide();

    // Liste des billets voie tech en fonction du domaine choisi et de la localisation choisie 
    $(".p2").click(function () {
        var domaine = $(this).attr("id")
        // Qd on clique sur le bouton licence pro voie tech, seulement les billets lié au domaine choisi apparaissent
        $(".bouton5").click(function () {
            $(".billet").hide()
            $(".billetlicence.billet-" + domaine).show()
        })
        $(".bouton6").click(function () {
// Liste des billets en fonction du domaine choisi
            $(".billet").hide()
            var billets = $(".billet-" + domaine)
            console.log($(domaine))
            $(billets).show()
        // Toute les listes déroulantes disparaissent 
        $(".liste_déroulante_tech").hide()
        // Seules les listes liées au domaine choisi apparaissent
        $(".liste_déroulante_localisation_tech_" + domaine + ", .liste_déroulante_établissement_tech_" + domaine + ",.liste_déroulante_mode_formation_tech_" + domaine).show()

        
        $(".liste_déroulante_localisation_tech_" + domaine).click(function () {
            var lieu = $(this).val()
            // Quand on clique sur la liste localisation, tous les billets disparaissent
            $(".billet").hide()
            // Seuls les billets liés à la localisation choisie apparaissent
            $(".billet-" + domaine + "." + lieu).show()
            // Si l'option choisie est "Tous" ou "Localisation", tous les billets s'affichent
            if (lieu == 'Tous' || lieu == 'Localisation') {
                $(".billet-" + domaine).show()
            }
        })

        $(".liste_déroulante_établissement_tech_" + domaine).click(function () {
            var établissement = $(this).val()
            // Quand on clique sur la liste établissements, tous les billets disparaissent
            $(".billet").hide()
            // Seuls les billets liés à l'établissement choisi apparaissent
            $(".billet-" + domaine + "." + établissement).show()
            // Si l'option choisie est "Tous" ou "Etablissements", tous les billets s'affichent
            if (établissement == 'Tous' || établissement == 'Établissement') {
                $(".billet-" + domaine).show()
            }
            // Si l'option choisie est "Efet Photographie", seuls les billets qui ont la classe "Efet" apparaissent
            if (établissement == 'Efet Photographie') {
                $(".billet-" + domaine + ".Efet").show()
            }
            // Idem que Efet Photographie
            if (établissement == 'ICAN Design') {
                $(".billet-" + domaine + ".ICAN").show()
            }
            if (établissement == 'Itecom Art Design') {
                $(".billet-" + domaine + ".Itecom").show()
            }
            if (établissement == 'L\'École de design Nantes-Atlantique') {
                $(".billet-" + domaine + ".Nantes-Atlantique").show()
            }
            if (établissement == 'MJM Graphic Design') {
                $(".billet-" + domaine + ".MJM").show()
            }
            if (établissement == 'Com\'Art') {
                $(".billet-" + domaine).show()
                $(".billet-" + domaine + ".Efet, .billet-" + domaine + ".ICAN,.billet-" + domaine + ".Itecom,.billet-" + domaine + ".Nantes-Atlantique,.billet-" + domaine + ".MJM,.billet-" + domaine + ".Supcréa,.billet-" + domaine + ".Goblins,.billet-" + domaine + ".Ican").hide()
            }
            if (établissement == 'CAMPUS SCIENCES-ULYON') {
                $(".billet-" + domaine + ".SCIENCES-ULYON").show()
            }
            if (établissement == 'Institut mines-technologie') {
                $(".billet-" + domaine + ".mines-technologie").show()
            }
            if (établissement == 'Isart Digital') {
                $(".billet-" + domaine + ".Isart").show()
            }
            if (établissement == 'My digital School') {
                $(".billet-" + domaine + ".digital").show()
            }
            if (établissement == 'Objectif 3D') {
                $(".billet-" + domaine + ".Objectif").show()
            }
            if (établissement == 'Sup de Web') {
                $(".billet-" + domaine + ".Web").show()
            }
            if (établissement == 'Les Ateliers de l\'image et du son') {
                $(".billet-" + domaine + ".Ateliers").show()
            }

        })
        $(".liste_déroulante_mode_formation_tech_" + domaine).click(function () {
            var mode = $(this).val()
            // Quand on clique sur la liste mode de formation, tous les billets disparaissent
            $(".billet").hide()
            // Seuls les billets liés au mode de formation choisi apparaissent
            $(".billet-" + domaine + "." + mode).show()
            // Si l'option choisie est "Tous" ou "Mode de formation", tous les billets s'affichent
            if (mode == 'Tous' || mode == 'Mode de formation') {
                $(".billet-" + domaine).show()
            }
            // Si l'option choisie est "Alternance dès la 2e année", seuls les billets qui ont la classe "année" s'affichent
            if (mode == 'Alternance dès la 2e année') {
                $(".billet-" + domaine + ".année").show()
            }

        })
    })
    })

    // Liste des billets voie com en fonction du domaine choisi et de la localisation choisie 
    // Même processus que pour la voie tech
    $(".p1").click(function () {
        
        var domaine = $(this).attr("id")
        $(".bouton3").click(function () {
            $(".billet").hide()
            $(".billetlicence2.billet-" + domaine).show()
        })

        $(".bouton4").click(function () {
        // Liste des billets en fonction du domaine choisi
                        $(".billet").hide()
                        var billets = $(".billet-" + domaine)
                        console.log($(domaine))
                        $(billets).show()
        })
        $(".liste_déroulante_com").hide()
        $(".liste_déroulante_localisation_com_" + domaine + ", .liste_déroulante_établissement_com_" + domaine + ",.liste_déroulante_mode_formation_com_" + domaine).show()

        $(".liste_déroulante_localisation_com_" + domaine).click(function () {
            var lieu = $(this).val()

            $(".billet").hide()
            $(".billet-" + domaine + "." + lieu).show()
            console.log($(domaine))
            if (lieu == 'Tous' || lieu == 'Localisation') {
                $(".billet-" + domaine).show()
            }
        })

        $(".liste_déroulante_établissement_com_" + domaine).click(function () {
            var établissement = $(this).val()
            $(".billet").hide()
            $(".billet-" + domaine + "." + établissement).show()
            // console.log($(domaine))
            if (établissement == 'Tous' || établissement == 'Établissement') {
                $(".billet-" + domaine).show()
            }
            if (établissement == 'Efet Photographie') {
                $(".billet-" + domaine + ".Efet").show()
            }
            if (établissement == 'ICAN Design') {
                $(".billet-" + domaine + ".ICAN").show()
            }
            if (établissement == 'Itecom Art Design') {
                $(".billet-" + domaine + ".Itecom").show()
            }
            if (établissement == 'L\'École de design Nantes-Atlantique') {
                $(".billet-" + domaine + ".Nantes-Atlantique").show()
            }
            if (établissement == 'MJM Graphic Design') {
                $(".billet-" + domaine + ".MJM").show()
            }
            if (établissement == 'Isart Digital') {
                $(".billet-" + domaine + ".Isart").show()
            }
            if (établissement == 'My digital School') {
                $(".billet-" + domaine + ".digital").show()
            }
            if (établissement == 'Objectif 3D') {
                $(".billet-" + domaine + ".Objectif").show()
            }
            if (établissement == 'Sup de Web') {
                $(".billet-" + domaine + ".Web").show()
            }
            if (établissement == 'Les Ateliers de l\'image et du son') {
                $(".billet-" + domaine + ".Ateliers").show()
            }
            if (établissement == 'Bellecour école') {
                $(".billet-" + domaine + ".Bellecour").show()
            }
            if (établissement == 'Digital College') {
                $(".billet-" + domaine + ".College").show()
            }
            if (établissement == 'Digital School Paris') {
                $(".billet-" + domaine + ".Digital").show()
                $(".billet-" + domaine + ".College").hide()
            }
            if (établissement == 'Maestris Sup') {
                $(".billet-" + domaine + ".Maestris").show()
            }
            if (établissement == 'IESA Multimédia') {
                $(".billet-" + domaine + ".IESA").show()
            }
            if (établissement == 'Ecole de Condé') {
                $(".billet-" + domaine + ".Condé").show()
            }
            if (établissement == 'Institut Artline') {
                $(".billet-" + domaine + ".Artline").show()
            }
            if (établissement == 'Studio Créa Paris') {
                $(".billet-" + domaine + ".Créa").show()
            }
            if (établissement == 'Studio M') {
                $(".billet-" + domaine + ".M").show()
            }
            if (établissement == 'AGR L\'école de l\'image') {
                $(".billet-" + domaine + ".AGR").show()
            }
            if (établissement == 'Axe Sud') {
                $(".billet-" + domaine + ".Axe").show()
            }
            if (établissement == 'Ecole Brassart') {
                $(".billet-" + domaine + ".Brassart").show()
            }
            if (établissement == 'Ecole Presqu\'île') {
                $(".billet-" + domaine + ".Ecole").show()
                $(".billet-" + domaine + ".Brassart,.billet-" + domaine + ".Strate").hide()
            }
            if (établissement == 'Com\'Art') {
                $(".billet-" + domaine).show()
                $(".billet-" + domaine + ".AGR,.billet-" + domaine + ".Autograf,.billet-" + domaine + ".Axe,.billet-" + domaine + ".Bellecour,.billet-" + domaine + ".AGR,.billet-" + domaine + ".E-artsup,.billet-" + domaine + ".Brassart,.billet-" + domaine + ".Ecole,.billet-" + domaine + ".Ecran,.billet-" + domaine + ".ECV,.billet-" + domaine + ".ESDAC,.billet-" + domaine + ".ESDL,.billet-" + domaine + ".Ican,.billet-" + domaine + ".ICAN,.billet-" + domaine + ".IIM,.billet-" + domaine + ".Artline,.billet-" + domaine + ".Isart,.billet-" + domaine + ".LISAA,.billet-" + domaine + ".Nantes-Atlantique,.billet-" + domaine + ".MJM,.billet-" + domaine + ".Objectif,.billet-" + domaine + ".Sea,.billet-" + domaine + ".Efet, .billet-" + domaine + ".ICAN,.billet-" + domaine + ".Artline,.billet-" + domaine + ".MJM,.billet-" + domaine + ".Supcréa,.billet-" + domaine + ".M,.billet-" + domaine + ".CIFACOM.billet-" + domaine + ".CLCF,.billet-" + domaine + ".Eicar,.billet-" + domaine + ".Isart,.billet-" + domaine + ".Ateliers,.billet-" + domaine + ".Digital,.billet-" + domaine + ".Condé,.billet-" + domaine + ".IMM,.billet-" + domaine + ".PSVA,.billet-" + domaine + ".ITIC,.billet-" + domaine + ".Créa,.billet-" + domaine + ".ECV,.billet-" + domaine + ".EEMI,.billet-" + domaine + ".ESD,.billet-" + domaine + ".IESA,.billet-" + domaine + ".Maestris,.billet-" + domaine + ".digital,.billet-" + domaine + ".Sup,.billet-" + domaine + ".CLCF,.billet-" + domaine + ".CIFACOM,.billet-Infographie.Itecom,.billet-" + domaine + ".Supinfogame-Rubika,.billet-" + domaine + ".Bordeaux,.billet-Graphisme.dès.Itecom").hide()
            }
            if (établissement == 'LIM\'ART') {
                $(".billet-" + domaine).show()
                $(".billet-" + domaine + ".AGR,.billet-" + domaine + ".Autograf,.billet-" + domaine + ".Axe,.billet-" + domaine + ".Bellecour,.billet-" + domaine + ".AGR,.billet-" + domaine + ".E-artsup,.billet-" + domaine + ".Brassart,.billet-" + domaine + ".Ecole,.billet-" + domaine + ".Ecran,.billet-" + domaine + ".ECV,.billet-" + domaine + ".ESDAC,.billet-" + domaine + ".ESDL,.billet-" + domaine + ".Ican,.billet-" + domaine + ".ICAN,.billet-" + domaine + ".IIM,.billet-" + domaine + ".Artline,.billet-" + domaine + ".Isart,.billet-" + domaine + ".LISAA,.billet-" + domaine + ".Nantes-Atlantique,.billet-" + domaine + ".MJM,.billet-" + domaine + ".Objectif,.billet-" + domaine + ".Sea,.billet-" + domaine + ".Strate, .billet-" + domaine + ".Créa,.billet-" + domaine + ".M,.billet-" + domaine + ".Supinfogame-Rubika,.billet-"+domaine+".Itecom,.billet-"+domaine+".Condé").hide()
            }
            if (établissement == 'Institut Artline') {
                $(".billet-" + domaine + ".Artline").show()
            }
            if (établissement == 'Studio Créa Paris') {
                $(".billet-" + domaine + ".Créa").show()
            }
            if (établissement == 'L\'école de design Nantes-Atlantique') {
                $(".billet-" + domaine + ".Nantes-Atlantique").show()
            }
            if (établissement == 'Strate Ecole de design') {
                $(".billet-" + domaine + ".Strate").show()
            }
        })
        $(".liste_déroulante_mode_formation_com_" + domaine).click(function () {
            var mode = $(this).val()

            $(".billet").hide()
            $(".billet-" + domaine + "." + mode).show()
            console.log($(domaine))
            if (mode == 'Tous' || mode == 'Mode de formation') {
                $(".billet-" + domaine).show()
            }
            if (mode == 'Alternance dès la 2e année' || mode == 'Mode de formation') {
                $(".billet-" + domaine + ".année").show()
            }

        })

    })

    // Actions et animations qd on clique sur le retour n°2 com
    $(".retour3").click(function () {
        $(".rer3").css({
            "transform": "translate(-125%)",
            "transition": "ease, transform 1.5s"
        });
        $(".rer1").css({
            "transform": "translate(-15%)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge3bas,.railrouge3haut").addClass("railmouseout")
        $(".railrouge3bas,.railrouge3haut").removeClass("railhover")
        $(".railrouge2").css({
            "-webkit-filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })

    })
    // Actions et animations qd on clique sur le retour n°2 tech
    $(".retour4").click(function () {
        $(".rer4").css({
            "transform": "translate(107%)",
            "transition": "ease, transform 1.5s"
        });
        $(".rer2").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })
        $(".railbleu3bas,.railbleu3haut").addClass("railmouseout")
        $(".railbleu3bas,.railbleu3haut").removeClass("railhover")
        $(".railbleu2").css({
            "-webkit-filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
            "filter": "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })

    })

    // Voie com
    // Animations qd on survole le rail com licences
    $(".railrouge3haut").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout railsaturate")
        $(".railrouge3bas").addClass("railmouseout")
        $(".railrouge3bas").removeClass("railhover")
        $(".bouton3").addClass("boutonhover3")
        $(".bouton3").removeClass("boutonmouseout")
    })
    // Animations qd on ne survole plus le rail com licences
    $(".railrouge3haut").mouseout(function () {
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton3").addClass("boutonmouseout")
        $(".bouton3").removeClass("boutonhover3")
    })
    // Animations qd on survole le rail com écoles
    $(".railrouge3bas").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".railrouge3haut").addClass("railmouseout")
        $(".railrouge3haut").removeClass("railhover")
        $(".bouton4").addClass("boutonhover")
        $(".bouton4").removeClass("boutonmouseout")
        $(".rer3ecole").css({
            "display": "block"
        })
    })
    // Animations qd on ne survole plus le rail com écoles
    $(".railrouge3bas").mouseout(function () {
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton4").addClass("boutonmouseout")
        $(".bouton4").removeClass("boutonhover")
    })
    // Animations qd on survole le bouton com licences
    $(".bouton3").hover(function () {
        $(".railrouge3haut").addClass("railhover")
        $(".railrouge3haut").removeClass("railmouseout")
        $(this).addClass("boutonhover4")
        $(this).removeClass("boutonmouseout")
        // $(".rer3licence").css({
        //     "display":"block"
        // })
    })
    // Animations qd on ne survole plus le bouton com licences
    $(".bouton3").mouseout(function () {
        $(this).removeClass("boutonhover4")
        $(this).addClass("boutonmouseout")

    })
    // Animations qd on survole le bouton com écoles
    $(".bouton4").hover(function () {
        $(".railrouge3bas").addClass("railhover")
        $(".railrouge3bas").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
        // $(".rer3ecole").css({
        //     "display": "block"
        // })
    })
    // Animations qd on ne survole plus le bouton com écoles
    $(".bouton4").mouseout(function () {
        $(this).addClass("boutonmouseout")
        $(this).removeClass("boutonhover2")
    })

    // Voie tech
    // Animations qd on survole le rail tech licences
    $(".railbleu3haut").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout railsaturate")
        $(".railbleu3bas").addClass("railmouseout")
        $(".railbleu3bas").removeClass("railhover")
        $(".bouton5").addClass("boutonhover5")
        $(".bouton5").removeClass("boutonmouseout")
    })
    // Animations qd on ne survole plus le rail tech licences
    $(".railbleu3haut").mouseout(function () {
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton5").addClass("boutonmouseout")
        $(".bouton5").removeClass("boutonhover5")
    })
    // Animations qd on survole le rail tech écoles
    $(".railbleu3bas").hover(function () {
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".railbleu3haut").addClass("railmouseout")
        $(".railbleu3haut").removeClass("railhover")
        $(".bouton6").addClass("boutonhover")
        $(".bouton6").removeClass("boutonmouseout")

    })
    // Animations qd on ne survole plus le rail tech écoles
    $(".railbleu3bas").mouseout(function () {
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton6").addClass("boutonmouseout")
        $(".bouton6").removeClass("boutonhover")
    })
    // Animations qd on survole le bouton tech licences
    $(".bouton5").hover(function () {
        $(".railbleu3haut").addClass("railhover")
        $(".railbleu3haut").removeClass("railmouseout")
        $(this).addClass("boutonhover6")
        $(this).removeClass("boutonmouseout")
        // $(".rer4licence").css({
        //     "display":"block"
        // })
    })
    // Animations qd on ne survole plus le bouton tech licences
    $(".bouton5").mouseout(function () {
        $(this).removeClass("boutonhover6")
        $(this).addClass("boutonmouseout")

    })
    // Animations qd on survole le bouton tech écoles
    $(".bouton6").hover(function () {
        $(".railbleu3bas").addClass("railhover")
        $(".railbleu3bas").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
        // $(".rer4ecole").css({
        //     "display":"block"
        // })
    })
    // Animations qd on ne survole plus le bouton tech écoles
    $(".bouton6").mouseout(function () {
        $(this).addClass("boutonmouseout")
        $(this).removeClass("boutonhover2")
    })

    // Actions qd on clique sur le bouton contact
    $(".contact").click(function () {
        $(".rer0").fadeOut()
        $(".rerformulaire").fadeIn()
    })
    // Actions qd on clique sur le bouton accueil de la page contact
    $(".accueil").click(function () {
        $(".rer0").fadeIn()
        $(".rerformulaire").fadeOut()
    })
    // Actions qd on clique sur le bouton cv
    $(".cv").click(function () {
        $(".rer0").fadeOut()
        $(".rercv").fadeIn()
    })
    // Actions qd on clique sur le bouton accueil de la page cv
    $(".accueil2").click(function () {
        $(".rer0").fadeIn()
        $(".rercv").fadeOut()
    })
    // Actions et animations qd on clique sur le bouton com licences
    $(".bouton3").click(function () {
        $(".rer3").css({
            "transform": "translate(105%,-10vw)",
            "transition": "ease, transform 1.5s"
        })
        $("html").css({
            "overflow-y": "scroll"
        })
        $(".rer3licence").css({
            "transform": "translate(-40.5%,-10vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge2").css({
            "-webkit-filter": "saturate(200%)",
            "filter": "saturate(200%)",
        })
        $(".railrougelicence,.railrougelicence2,.railrougelicence3,.railrougelicence4,.railrougelicence5,.railrougelicence6,.railrougelicence7,.railrougelicence8,.railrougelicence9,.railrougelicence10,.railrougelicence11,.railrougelicence12,.railrougelicence13").addClass("railsaturate")
        $(".railrouge3haut").addClass("railsaturate")
        $(".railrouge3haut").addClass("railmouseout")

        $(".railjaune").hide()
    })
    // Animations qd on survole le rail com licences
    $(".rer3licence").hover(function () {
        $(".railrouge3haut").addClass("railmouseout")
    })
    // Actions et animations qd on clique sur le retour com licences
    $(".retour3licence").click(function () {
        $(".rer3").css({
            "transform": "translate(-10%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge3haut").removeClass("railsaturate")
        $(".railrougelicence,.railrougelicence2,.railrougelicence3,.railrougelicence4,.railrougelicence5,.railrougelicence6,.railrougelicence7,.railrougelicence8,.railrougelicence9,.railrougelicence10,.railrougelicence11,.railrougelicence12,.railrougelicence13").removeClass("railsaturate")
        $(".railrougelicence,.railrougelicence2,.railrougelicence3,.railrougelicence4,.railrougelicence5,.railrougelicence6,.railrougelicence7,.railrougelicence8,.railrougelicence9,.railrougelicence10,.railrougelicence11,.railrougelicence12,.railrougelicence13").addClass("railmouseout")
        $(".rer3licence").css({
            "transform": "translate(-157%, 0vw)",
            "transition": "ease, transform 1.5s"
        })
        $("html").css({
            "overflow-y": "hidden"
        })
    })
    // Actions et animations qd on clique sur le bouton com écoles
    $(".bouton4").click(function () {
        $(".rer3").css({
            "transform": "translate(33%, -65vw)",
            "transition": "ease, transform 1.5s",
        })
        $("html").css({
            "overflow-y": "scroll"
        })
        $(".rer3ecole").css({
            "transform": "translate(10%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge2").css({
            "-webkit-filter": "saturate(200%)",
            "filter": "saturate(200%)",
        })
        $(".railjaune,.railjaune2,.railjaune3,.railjaune4,.railjaune5,.railjaune6,.railjaune7,.railjaune8,.railjaune9,.railjaune10,.railjaune11,.railjaune12,.railjaune13,.railjaune14,.railjaune15,.railjaune16,.railjaune17,.railjaune18,.railjaune19,.railjaune20,.railjaune21,.railjaune22,.railjaune23,.railjaune24,.railjaune25,.railjaune26,.railjaune27,.railjaune28,.railjaune29,.railjaune30,.railjaune31").addClass("railsaturate")
        $(".railrouge3bas").addClass("railsaturate")
        $(".railrouge3bas").addClass("railmouseout")

        $(".railjaune").show()
    })
    // Animations qd on survole le rail com écoles
    $(".rer3ecole").hover(function () {
        $(".railrouge3bas").addClass("railmouseout")
    })
    // Actions et animations qd on clique sur le retour com écoles
    $(".retour3ecole").click(function () {
        $(".rer3").css({
            "transform": "translate(-10%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge3bas").removeClass("railsaturate")
        $(".railjaune,.railjaune2,.railjaune3,.railjaune4,.railjaune5,.railjaune6,.railjaune7,.railjaune8,.railjaune9,.railjaune10,.railjaune11,.railjaune12,.railjaune13,.railjaune14,.railjaune15,.railjaune16,.railjaune17,.railjaune18,.railjaune19,.railjaune20,.railjaune21,.railjaune22,.railjaune23,.railjaune24,.railjaune25,.railjaune26,.railjaune27,.railjaune28,.railjaune29,.railjaune30,.railjaune31").removeClass("railsaturate")
        $(".railjaune,.railjaune2,.railjaune3,.railjaune4,.railjaune5,.railjaune6,.railjaune7,.railjaune8,.railjaune9,.railjaune10,.railjaune11,.railjaune12,.railjaune13,.railjaune14,.railjaune15,.railjaune16,.railjaune17,.railjaune18,.railjaune19,.railjaune20,.railjaune21,.railjaune22,.railjaune23,.railjaune24,.railjaune25,.railjaune26,.railjaune27,.railjaune28,.railjaune29,.railjaune30,.railjaune31").addClass("railmouseout")
        $(".rer3ecole").css({
            "transform": "translate(-33.1%, 66vw)",
            "transition": "ease, transform 1.5s"
        })
        $("html").css({
            "overflow-y": "hidden"
        })
    })
    // Actions et animations qd on clique sur le bouton tech licences
    $(".bouton5").click(function () {
        $(".rer4").css({
            "transform": "translate(-130%,-10vw)",
            "transition": "ease, transform 1.5s",
        })
        $("html").css({
            "overflow-y": "scroll"
        })
        $(".rer4licence").css({
            "transform": "translate(10%, -10vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railbleu").addClass("railombre")
        $(".railbleu2").css({
            "-webkit-filter": "saturate(200%)",
            "filter": " saturate(200%)",
        })
        $(".railbleulicence, .railbleulicence2,.railbleulicence3,.railbleulicence4,.railbleulicence5,.railbleulicence6,.railbleulicence7,.railbleulicence8,.railbleulicence9,.railbleulicence10,.railbleulicence11,.railbleulicence12").addClass("railsaturate")
        $(".railbleu3haut").addClass("railmouseout railsaturate")
        $(".railbleu3haut").removeClass("railhover")

    })
    // Animations qd on survole le rail tech licences ou les billet formations tech
    $(".railbleulicence,.billetlicence").hover(function () {
        $(".railbleu3haut").addClass("railmouseout railsaturate")
        $(".railbleu3haut").removeClass("railhover")
    })

    // Actions et animations qd on clique sur le retour tech licences
    $(".retour4licence").click(function () {
        $(".rer4").css({
            "transform": "translate(0%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railbleu3haut").removeClass("railsaturate")
        $(".railbleulicence,.railbleulicence2,.railbleulicence3,.railbleulicence4,.railbleulicence5,.railbleulicence6,.railbleulicence7,.railbleulicence8,.railbleulicence9,.railbleulicence10,.railbleulicence11,.railbleulicence12").removeClass("railsaturate")
        $(".railbleulicence,.railbleulicence2,.railbleulicence3,.railbleulicence4,.railbleulicence5,.railbleulicence6,.railbleulicence7,.railbleulicence8,.railbleulicence9,.railbleulicence10,.railbleulicence11,.railbleulicence12").addClass("railmouseout")
        $(".rer4licence").css({
            "transform": "translate(138%)",
            "transition": "ease, transform 1.5s"
        })
        $("html").css({
            "overflow-y": "hidden"
        })
    })
    // Actions et animations qd on clique sur le bouton tech écoles
    $(".bouton6").click(function () {
        $(".rer4").css({
            "transform": "translate(-38.8%, -69vw)",
            "transition": "ease, transform 1.5s",
        })
        $("html").css({
            "overflow-y": "scroll"
        })
        $(".rer4ecole").css({
            "transform": "translate(10%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railbleu").addClass("railombre")
        $(".railbleu2").css({
            "-webkit-filter": "saturate(200%)",
            "filter": " saturate(200%)",
        })
        $(".railvert,.railvert2,.railvert3,.railvert4,.railvert5").addClass("railsaturate")
        $(".railbleu3bas").addClass("railsaturate")
        $(".railbleu3bas").addClass("railmouseout")
    })
    // Animations qd on survole la page école tech
    $(".rer4ecole").hover(function () {
        $(".railbleu3bas").addClass("railmouseout")
    })
    // Actions et animations qd on clique sur le bouton retour tech école
    $(".retour4ecole").click(function () {
        $(".rer4").css({
            "transform": "translate(-1%, 0vw)",
            "transition": "ease, transform 1.5s",
        })
        $(".railbleu3bas").removeClass("railsaturate")
        $(".railvert,.railvert2,.railvert3,.railvert4,.railvert5").removeClass("railsaturate")
        $(".railvert,.railvert2,.railvert3,.railvert4,.railvert5").addClass("railmouseout")
        $(".rer4ecole").css({
            "transform": "translate(48%, 68vw)",
            "transition": "ease, transform 1.5s"
        })
        $("html").css({
            "overflow-y": "hidden"
        })
    })

    // Faire apparaitre la liste de formation du type de formation choisi
    $(".liste").hide()
    $(".boutons").hover(function () {
        var bouton = $(this).attr("id")
        $(".liste").hide()
        $("." + bouton).show()

    })
    // Tous les billets sont cachés
    $(".billet").hide()

    // Animations quand on survole les personnages
    $(".persojulie,.persomanar,.persostef,.persoyasmine").hover(function () {
        var nom = $(this).attr("id")
        $(this).addClass(nom + "hover")
        $(this).removeClass(nom + "mouseout")
        $("#" + nom + "cv").hide()
        $("." + nom + "cv").show()
    })
    // Animations quand on ne survole plus les personnages
    $(".persojulie,.persomanar,.persostef,.persoyasmine").mouseout(function () {
        var nom = $(this).attr("id")
        $(this).removeClass(nom + "hover")
        $(this).addClass(nom + "mouseout")
    })

    $(".remonter_lic_tech,.remonter_lic_com,.remonter_eco_tech,.remonter_eco_com").click(function(){
        $("html, body").animate({scrollTop: 0},"fast");
    });
})