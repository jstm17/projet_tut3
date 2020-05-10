$(document).ready(function(){
    /*présentation*/
    $(".capté").click(function(){
        $(".présentation").hide();
        $(".mmitinéraire").hide();
    })
    $(".aide").click(function(){
        $(".présentation").show();
        $(".mmitinéraire").show();
    })
    $(".cv,.contact,.aide,.capté,.accueil,.accueil2,.envoyer,.cv1julie,.cv2julie,.cv1manar,.cv2manar,.cv1stef,.cv2stef,.cv1yasmine,.cv2yasmine").hover(function(){
        $(this).addClass("cvhover")
        $(this).removeClass("cvmouseout")
    })
    $(".cv,.contact,.aide,.capté,.accueil,.accueil2,.envoyer,.cv1julie,.cv2julie,.cv1manar,.cv2manar,.cv1stef,.cv2stef,.cv1yasmine,.cv2yasmine").mouseout(function(){
        $(this).removeClass("cvhover")
        $(this).addClass("cvmouseout")
    })
  

    $(".domaine").addClass("domaine2")
        /*rail rouge*/
        $(".railrouge").hover(function(){
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".bouton1").addClass("boutonhover")
        $(".bouton1").removeClass("boutonmouseout")
        })

         $(".railrouge").mouseout(function(){
            $(this).removeClass("railhover")
            $(".bouton1").removeClass("boutonhover")
            $(this).addClass("railmouseout")
            $(".bouton1").addClass("boutonmouseout")
         })
       
        /*bouton1*/
         $(".bouton1").hover(function(){
            $(".railrouge").addClass("railhover")
            $(".railrouge").removeClass("railmouseout")
            $(this).addClass("boutonhover2")
            $(this).removeClass("boutonmouseout")
         })
         $(".bouton1").mouseout(function(){
             $(this).addClass("boutonmouseout")
             $(this).removeClass("boutonhover2")
         })
       
        $(".bouton1").click(function(){
        $(".rer0").css({
            "transform": "translate(100%)",
            "transition": "ease, transform 1.5s"
        })
        
        $(".rer1").css({
        "transform": "translate(-15%)",
        "transition": "ease, transform 1.5s"
        })

        $(".railrouge2").css({
            "-webkit-filter" : "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(-5px 5px 5px #666666)",
        })
        
        $(".railrouge").addClass("railclick")
        $(".railrouge").removeClass("railhover railmouseout")
    }); 

   /*rail bleu*/
   $(".railbleu").hover(function(){
    $(this).addClass("railhover")
    $(this).removeClass("railmouseout")
    $(".bouton2").addClass("boutonhover")
    $(".bouton2").removeClass("boutonmouseout")
   })

   $(".railbleu").mouseout(function(){
    $(this).removeClass("railhover")
    $(".bouton2").removeClass("boutonhover")
    $(this).addClass("railmouseout")
    $(".bouton2").addClass("boutonmouseout")
 })
    
    /*bouton2*/
    $(".bouton2").hover(function(){
        $(".railbleu").addClass("railhover")
        $(".railbleu").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
     })
     $(".bouton2").mouseout(function(){
         $(this).addClass("boutonmouseout")
         $(this).removeClass("boutonhover2")
     })
    
    $(".bouton2").click(function(){
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
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    })});   

    
    /*Retour1*/
    $(".retour1").click(function(){
        $(".rer0").css({
            "transform": "translate(0%)",
            "transition": "ease, transform 1.5s",
        })  
        $(".rer1").css({
            "transform": "translate(-115%)",
            "transition": "ease, transform 1.5s",
        })
        $(".railrouge2").css({
            "-webkit-filter" : "saturate(100%) drop-shadow((-5x 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(-5px 5px 5px #666666)",
        })
        
        $(".railrouge").removeClass("railclick")
        $(".railrouge").removeClass("railhover")
   });

   /*Retour2*/
   $(".retour2").click(function(){
    $(".rer0").css({
        "transform": "translate(0%)",
        "transition": "ease, transform 1.5s",
    })  
    $(".rer2").css({
        "transform": "translate(100%)",
        "transition": "ease, transform 1.5s",
    });

    $(".railbleu2").css({
            "-webkit-filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(100%) drop-shadow(5px 5px 5px #666666)",
        })
 
    $(".railbleu").removeClass("railclick railhover railombre")
    }); 


    /*nom rail bleu*/
    $(".réseaux").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
        $(".pointnb").addClass("pointhover")
        });
       
    $(".réseaux").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $(".pointnb").removeClass("pointhover")

    });
    $(".algo").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
       $(".pointn2b").addClass("pointhover")
});
    $(".algo").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $(".pointn2b").removeClass("pointhover")
    });
    $(".base").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
        $(".pointn3b").addClass("pointhover")
    });
    $(".base").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $(".pointn3b").removeClass("pointhover")
    });
    $(".intégration").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
        $(".pointn4b").addClass("pointhover")
    });
    $(".intégration").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $(".pointn4b").removeClass("pointhover")
    });
    $(".sound").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover")
        $(".pointn5b").addClass("pointhover")
    });
    $(".sound").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover")
        $(".pointn5b").removeClass("pointhover")
    });
    
    /*points rail bleu*/
    $(".pointnb").hover(function(){
        $(".réseaux").removeClass("domaine2")
        $(".réseaux").addClass("domainehover")
        $(this).addClass("pointhover")
    });
    $(".pointnb").mouseout(function(){
        $(".réseaux").addClass("domaine2")
        $(".réseaux").removeClass("domainehover")
        $(this).removeClass("pointhover")
    })
    $(".pointn2b").hover(function(){
        $(".algo").removeClass("domaine2")
        $(".algo").addClass("domainehover")
        $(this).addClass("pointhover")
    });
    $(".pointn2b").mouseout(function(){
        $(".algo").addClass("domaine2")
        $(".algo").removeClass("domainehover")
        $(this).removeClass("pointhover")
    });
$(".pointn3b").hover(function(){
    $(".base").removeClass("domaine2")
    $(".base").addClass("domainehover")
    $(this).addClass("pointhover")
});
    $(".pointn3b").mouseout(function(){
        $(".base").addClass("domaine2")
        $(".base").removeClass("domainehover")
        $(this).removeClass("pointhover")
    });
    $(".pointn4b").hover(function(){
        $(".intégration").removeClass("domaine2")
        $(".intégration").addClass("domainehover")
        $(this).addClass("pointhover")
    });
    $(".pointn4b").mouseout(function(){
        $(".intégration").addClass("domaine2")
        $(".intégration").removeClass("domainehover")
        $(this).removeClass("pointhover")
    });
        $(".pointn5b").hover(function(){
            $(".sound").removeClass("domaine2")
            $(".sound").addClass("domainehover")
            $(this).addClass("pointhover")
        });
    $(".pointn5b").mouseout(function(){
        $(".sound").addClass("domaine2")
        $(".sound").removeClass("domainehover")
        $(this).removeClass("pointhover")
    });

    /*points rail rouge 2*/
    $(".pointnr").hover(function(){
        $(".marketing").removeClass("domaine2")
        $(".marketing").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointnr").mouseout(function(){
        $(".marketing").addClass("domaine2")
        $(".marketing").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".pointn2r").hover(function(){
        $(".gestion").removeClass("domaine2")
        $(".gestion").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointn2r").mouseout(function(){
        $(".gestion").addClass("domaine2")
        $(".gestion").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".pointn3r").hover(function(){
        $(".communication").removeClass("domaine2")
        $(".communication").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointn3r").mouseout(function(){
        $(".communication").addClass("domaine2")
        $(".communication").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".pointn4r").hover(function(){
        $(".audiovisuel").removeClass("domaine2")
        $(".audiovisuel").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointn4r").mouseout(function(){
        $(".audiovisuel").addClass("domaine2")
        $(".audiovisuel").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".pointn5r").hover(function(){
        $(".infographie").removeClass("domaine2")
        $(".infographie").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointn5r").mouseout(function(){
        $(".infographie").addClass("domaine2")
        $(".infographie").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".pointn6r").hover(function(){
        $(".graphisme").removeClass("domaine2")
        $(".graphisme").addClass("domainehover2")
        $(this).addClass("pointhover")
    });
    $(".pointn6r").mouseout(function(){
        $(".graphisme").addClass("domaine2")
        $(".graphisme").removeClass("domainehover2")
        $(this).removeClass("pointhover")
    })
    $(".marketing").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointnr").addClass("pointhover")
        });
       
    $(".marketing").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointnr").removeClass("pointhover")

    });
    $(".gestion").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointn2r").addClass("pointhover")
        });
       
    $(".gestion").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointn2r").removeClass("pointhover")

    });
    $(".communication").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointn3r").addClass("pointhover")
        });
       
    $(".communication").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointn3r").removeClass("pointhover")

    });
    $(".audiovisuel").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointn4r").addClass("pointhover")
        });
       
    $(".audiovisuel").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointn4r").removeClass("pointhover")

    });
    $(".infographie").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointn5r").addClass("pointhover")
        });
       
    $(".infographie").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointn5r").removeClass("pointhover")

    });
    $(".graphisme").hover(function(){
        $(this).removeClass("domaine2")
        $(this).addClass("domainehover2")
        $(".pointn6r").addClass("pointhover")
        });
       
    $(".graphisme").mouseout(function(){
        $(this).addClass("domaine2")
        $(this).removeClass("domainehover2")
        $(".pointn6r").removeClass("pointhover")

    });

    $(".p1").click(function(){
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
    });
    $(".p2").click(function(){
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
    // retour 3
    $(".retour3").click(function(){
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
        "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
    })

    })
    // retour 4
    $(".retour4").click(function(){
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
            "-webkit-filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        "filter" : "saturate(200%) drop-shadow(5px 5px 5px #666666)",
        })
        
    })

    // rail rouge 3
    $(".railrouge3haut").hover(function(){
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout railsaturate")
        $(".railrouge3bas").addClass("railmouseout")
        $(".railrouge3bas").removeClass("railhover")
        $(".bouton3").addClass("boutonhover3")
        $(".bouton3").removeClass("boutonmouseout")
    })
    $(".railrouge3haut").mouseout(function(){
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton3").addClass("boutonmouseout")
        $(".bouton3").removeClass("boutonhover3")
    })

    $(".railrouge3bas").hover(function(){
        $(this).addClass("railhover")
        $(this).removeClass("railmouseout")
        $(".railrouge3haut").addClass("railmouseout")
        $(".railrouge3haut").removeClass("railhover")
        $(".bouton4").addClass("boutonhover")
        $(".bouton4").removeClass("boutonmouseout")
    })
    $(".railrouge3bas").mouseout(function(){
        $(this).addClass("railmouseout")
        $(this).removeClass("railhover")
        $(".bouton4").addClass("boutonmouseout")
        $(".bouton4").removeClass("boutonhover")
    })

    $(".bouton3").hover(function(){
        $(".railrouge3haut").addClass("railhover")
        $(".railrouge3haut").removeClass("railmouseout")
        $(this).addClass("boutonhover4")
        $(this).removeClass("boutonmouseout")
    })
    $(".bouton3").mouseout(function(){
        $(this).removeClass("boutonhover4")
        $(this).addClass("boutonmouseout")
        
    })
    $(".bouton4").hover(function(){
        $(".railrouge3bas").addClass("railhover")
        $(".railrouge3bas").removeClass("railmouseout")
        $(this).addClass("boutonhover2")
        $(this).removeClass("boutonmouseout")
     })
     $(".bouton4").mouseout(function(){
         $(this).addClass("boutonmouseout")
         $(this).removeClass("boutonhover2")
     })

// rail bleu 3
$(".railbleu3haut").hover(function(){
    $(this).addClass("railhover")
    $(this).removeClass("railmouseout railsaturate")
    $(".railbleu3bas").addClass("railmouseout")
    $(".railbleu3bas").removeClass("railhover")
    $(".bouton5").addClass("boutonhover5")
    $(".bouton5").removeClass("boutonmouseout")
})
$(".railbleu3haut").mouseout(function(){
    $(this).addClass("railmouseout")
    $(this).removeClass("railhover")
    $(".bouton5").addClass("boutonmouseout")
    $(".bouton5").removeClass("boutonhover5")
})
$(".railbleu3bas").hover(function(){
    $(this).addClass("railhover")
    $(this).removeClass("railmouseout")
    $(".railbleu3haut").addClass("railmouseout")
    $(".railbleu3haut").removeClass("railhover")
    $(".bouton6").addClass("boutonhover")
    $(".bouton6").removeClass("boutonmouseout")

})
$(".railbleu3bas").mouseout(function(){
    $(this).addClass("railmouseout")
    $(this).removeClass("railhover")
    $(".bouton6").addClass("boutonmouseout")
    $(".bouton6").removeClass("boutonhover")
})
$(".bouton5").hover(function(){
    $(".railbleu3haut").addClass("railhover")
    $(".railbleu3haut").removeClass("railmouseout")
    $(this).addClass("boutonhover6")
    $(this).removeClass("boutonmouseout")
})
$(".bouton5").mouseout(function(){
    $(this).removeClass("boutonhover6")
    $(this).addClass("boutonmouseout")
    
})
$(".bouton6").hover(function(){
    $(".railbleu3bas").addClass("railhover")
    $(".railbleu3bas").removeClass("railmouseout")
    $(this).addClass("boutonhover2")
    $(this).removeClass("boutonmouseout")
 })
 $(".bouton6").mouseout(function(){
     $(this).addClass("boutonmouseout")
     $(this).removeClass("boutonhover2")
 })

 $(".contact").click(function(){
     $(".rer0").fadeOut()
     $(".rerformulaire").fadeIn()
 })
 $(".accueil").click(function(){
    $(".rer0").fadeIn()
    $(".rerformulaire").fadeOut()
})

$(".cv").click(function(){
    $(".rer0").fadeOut()
    $(".rercv").fadeIn()
})
$(".accueil2").click(function(){
   $(".rer0").fadeIn()
   $(".rercv").fadeOut()
})

$(".bouton3").click(function(){
    $(".rer3").css({
        "transform":"translate(100%)",
        "transition":"ease, transform 1.5s"
    })
    $(".rer5licences")
    $(".railrouge2").css({
        "-webkit-filter" : "saturate(200%)",
        "filter" : "saturate(200%)",
    })
    $(".rer3licence").css({
        "transform": "translate(-33.1%)",
        "transition": "ease, transform 1.5s"
    })
})

$(".bouton4").click(function(){
    $(".rer3").css({
        "transform":"translate(25%, -65vw)",
        "transition":"ease, transform 1.5s",
    })
    $("html").css({
        "overflow-y":"scroll"
    })
    $(".rer3ecole").css({
        "transform": "translate(2%, 0vw)",
        "transition": "ease, transform 1.5s"
    })
    $(".railrouge2").css({
        "-webkit-filter" : "saturate(200%)",
        "filter" : "saturate(200%)",
    })
    $(".railjaune").addClass("railsaturate")
    $(".railrouge3bas").addClass("railsaturate")
    $(".railrouge3bas").addClass("railmouseout")
    })

$(".rer3ecole").hover(function(){
    $(".railrouge3bas").addClass("railmouseout")
})

    $(".retour3ecole").click(function(){
        $(".rer3").css({
            "transform":"translate(-10%, 0vw)",
            "transition":"ease, transform 1.5s",
        })
        $(".railrouge3bas").removeClass("railsaturate")
        $(".railjaune").removeClass("railsaturate")
        $(".railjaune").addClass("railmouseout")
        $(".rer3ecole").css({
            "transform": "translate(-33.1%, 66vw)",
            "transition": "ease, transform 1.5s"
        })

    })
    $(".bouton5").click(function(){
        $(".rer4").css({
            "transform":"translate(-125%)",
            "transition":"ease, transform 1.5s",
        })
        $("html").css({
            "overflow-y":"scroll"
        })
        $(".rer4licence").css({
            "transform": "translate(10%, 0vw)",
            "transition": "ease, transform 1.5s"
        })
        $(".railbleu").addClass("railombre")
        $(".railbleu2").css({
            "-webkit-filter": "saturate(200%)",
            "filter":" saturate(200%)",
        })
        $(".railbleulicence").addClass("railsaturate")
        // $(".railbleu3haut").addClass("railsaturate")
        $(".railbleu3haut").addClass("railmouseout railsaturate")
        $(".railbleu3haut").removeClass("railhover")
    })

    $(".railbleulicence").hover(function(){
        $(".railrouge3bas").addClass("railmouseout")
        $(".railbleu3haut").addClass("railmouseout railsaturate")
        $(".railbleu3haut").removeClass("railhover")
    })

    $(".retour4licence").click(function(){
        $(".rer4").css({
            "transform":"translate(0%, 0vw)",
            "transition":"ease, transform 1.5s",
        })
        $(".railbleu3haut").removeClass("railsaturate")
        $(".railbleulicence").removeClass("railsaturate")
        $(".railbleulicence").addClass("railmouseout")
        $(".rer4licence").css({
            "transform": "translate(133%)",
            "transition": "ease, transform 1.5s"
        })

    })
    // bouton bleu ecole
$(".bouton6").click(function(){
    $(".rer4").css({
        "transform":"translate(-38.8%, -69vw)",
        "transition":"ease, transform 1.5s",
    })
    $("html").css({
        "overflow-y":"scroll"
    })
    $(".rer4ecole").css({
        "transform": "translate(10%, 0vw)",
        "transition": "ease, transform 1.5s"
    })
    $(".railbleu").addClass("railombre")
    $(".railbleu2").css({
        "-webkit-filter": "saturate(200%)",
        "filter":" saturate(200%)",
    })
    $(".railvert").addClass("railsaturate")
    $(".railbleu3bas").addClass("railsaturate")
    $(".railbleu3bas").addClass("railmouseout")
    }) 

$(".rer4ecole").hover(function(){
    $(".railbleu3bas").addClass("railmouseout")
})

    $(".retour4ecole").click(function(){
        $(".rer4").css({
            "transform":"translate(-1%, 0vw)",
            "transition":"ease, transform 1.5s",
        })
        $(".railbleu3bas").removeClass("railsaturate")
        $(".railvert").removeClass("railsaturate")
        $(".railvert").addClass("railmouseout")
        $(".rer4ecole").css({
            "transform": "translate(48%, 68vw)",
            "transition": "ease, transform 1.5s"
        })

    })
})  


