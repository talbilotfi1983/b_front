<?php

// Connexion à la base
include 'config/connexion.php';
include 'config/bdd.php';


?>


</div>

<div class="container">

    <h1>Piéces et Equipements </h1>
    <!-- Slogan -->
    <div class="single-post-box">
        <div class="review-box">
            <div class="summary-box">
                <h2>Achetez vos produits chez Bobo Pneus !</h2>
                <p>Acheter vos produits en ligne dés maintenant ! Recevez vos produits en toute sécurité </p>
                <div class="summary-degree">
                    <p>Reparer en ligne </p>
                </div>
            </div>
        </div>
    </div>
    <!-- Slogan -->

    <?php
    // $title[] = [
    //     'Pièces moteur',
    //     'Filtres et huile',
    //     'Direction / Suspension / Train',
    //     'Freinage', 'Optiques / Phares / Ampoules',
    //     'Embrayage et Boîte de vitesse',
    //     'Démarrage électrique',
    //     'Capteurs et Sondes',
    //     'Essuie-glaces et pièces',
    //     'Echappement', 'Accessoires et Equipements', 'Pièces Habitacle',
    //     'Carrosserie / Vitres / Peinture', 'Joints et Étanchéité', 'Pneus et Equipements Roue', 'Outillage', 'Attelage et Portage', 'Entretien et Nettoyage'
    // ];
    $title = array(
        'Pièces moteur',
        'Filtres et huile',
        'Direction / Suspension / Train',
        'Freinage', 'Optiques / Phares / Ampoules',
        'Embrayage et Boîte de vitesse',
        'Démarrage électrique',
        'Capteurs et Sondes',
        'Essuie-glaces et pièces',
        'Echappement', 'Accessoires et Equipements', 'Pièces Habitacle',
        'Carrosserie / Vitres / Peinture', 'Joints et Étanchéité', 'Pneus et Equipements Roue', 'Outillage', 'Attelage et Portage', 'Entretien et Nettoyage'
    );

    ?>
    <?php foreach ($piecesequipements as $piecesequipement) { ?>
        <div class="row">
            <div class="col-md-4">
                <div class="contenue">
                    <div class="titre">
                        <h3><?php
                            for ($numero = 0; $numero < 5; $numero++) {

                                echo $title[$numero] . '<br />'; // affichera $prenoms[0], $prenoms[1] etc.

                            }

                            ?>


                            ?></h3>
                        <img class="ico_equipement" src="https://www.bobopneus-equipements.com/static/images/pieces/automobile/<?php echo $piecesequipement['images']; ?>" alt="<?php echo $pieceequipement['images']; ?>">
                    </div>
                    <!-- Liste déroulante -->
                    <h5 onclick='openProduit()' class="produit" id='produit'><i id="open" class="fas fa-arrow-right"></i><?php echo $piecesequipement['categorie2']; ?></h5>
                    <ul id="item">
                        <?php foreach ($sous_categories as $sous_categorie) { ?>
                            <li><a href="#"><?php echo $sous_categorie['sous_categorie']; ?></a></li>
                        <?php } ?>

                    </ul>



                </div>



            </div>
        </div><?php } ?>



    <div class="row">
        <div class="col-md-4"></div>
    </div>




    <!-- [EO] Liste déroulante -->
    <!--<h5 onclick='openProduit(2)' class="produit" id='produit'><i class="fas fa-arrow-right"></i> Refroidissement moteur</h5>-->
    <!-- <ul id="item2">
                            <li><a href="#">Radiateur moteur</a></li>
                            <li><a href="#">Thermostat d'eau</a></li>
                            <li><a href="#">Liquide de refroidissement</a></li>
                            <li><a href="#">Durite de radiateur</a></li>
                            <li><a href="#">Vase d'expansion, liquide de refroidissement</a></li>
                            <li class="bold"><a href="#">Plus de pièces</a></li>
                        </ul> -->
    <!-- [EO] liste deroulante  -->

    <!-- 1 liste deroulante -->
    <!-- <h5 onclick='openProduit(3)' class="produit" id='produit'><i class="fas fa-arrow-right"></i>Injection carburation</h5>
                        <ul id="item3">
                            <li><a href="#">Injecteur</a></li>
                            <li><a href="#">Débitmètre de masse d'air</a></li>
                            <li><a href="#">Tuyau de carburant</a></li>
                            <li><a href="#">Corps papillon</a></li>
                            <li><a href="#">Unité d'injection de carburant</a></li>
                            <li class="bold"><a href="#">Plus de pièces</a></li>
                        </ul> -->
    <!-- [EO] liste deroulante  -->
    <!-- <h5 onclick='openProduit(4)' class="produit" id='produit'><i class="fas fa-arrow-right"></i>Bougies et Piéces d'allumage</h5>
                        <ul id="item4">
                            <li><a href="#">Bougie d'allumage</a></li>
                            <li><a href="#">Bobine d'allumage</a></li>
                            <li><a href="#">Jeu de 4 bougies d'allumage</a></li>
                            <li><a href="#">Jeu de câble d'allumage</a></li>
                            <li><a href="#">Tête d'allumeur</a></li>
                            <li class="bold"><a href="#">Plus de pièces</a></li>
                        </ul>
                        <!!-- [EO] liste deroulante  >

                        <!!-- 1 liste deroulante >
                        <h5 onclick='openProduit(5)' class="produit" id='produit'><i class="fas fa-arrow-right"></i>Moteur et Culasse</h5>
                        <ul id="item5">
                            <li><a href="#">Joint de culasse</a></li>
                            <li><a href="#">Joint couvre culbuteurs</a></li>
                            <li><a href="#">Pochette de joints haut moteur</a></li>
                            <li><a href="#">Bague d'étanchéité, vilebrequin</a></li>
                            <li><a href="#">Jeu de vis de culasse</a></li>
                            <li class="bold"><a href="#">Plus de pièces</a></li>
                        </ul> -->

</div><!-- EO CONTAINER -->

<script>
    function openProduit() {
        var objectId = 'item';
        console.log(objectId);

        let produit = document.getElementById(objectId);


        // Balise <li> 
        produit.style.visibility = (produit.style.visibility == 'visible') ? 'hidden' : 'visible';
        produit.style.display = (produit.style.display == 'block') ? 'none' : 'block';
        // [EO] Balise <li>




    }
</script>