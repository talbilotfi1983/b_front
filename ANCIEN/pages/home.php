<?php
// Connexion à la base
include 'config/connexion.php';
include 'config/bdd.php';
?>
<!-- cookie -->
<div class="cookie"></div>

<div class="container">

    <div class="row">
        <div class="col-md-7 col-sm-8">

            <!-- block content -->
            <div class="block-content">

                <!-- Slider -->
                <div class="grid-box">
                    <div class="items">
                        <!-- MODIF STAGIAIRES -->
                        <h1>LES PIÈCES MULTIMARQUES</h1>

                        <p>Commander vos piéces en ligne chez <strong>Bobopneus</strong> au sein d'un large choix de produits <span>C'est si simple d'acheter chez nous</span> </p>
                    </div>
                    <!-- EO MODIF STAGIAIRES -->

                    <!-- Mise en avant SLIDER -->
                    <div class="image-slider">
                        <ul class="bxslider">

                            <?php foreach ($sliders as $slider) { ?>
                                <li>
                                    <div class="news-post image-post">
                                        <img src="static/images/slider/<?php echo $slider['image']; ?>" alt="<?php echo $slider['image']; ?>">
                                        <div class="hover-box">
                                            <span class="top-stories"><?php echo $slider['nomBoboPneusEtEquipements']; ?></span>
                                            <div class="inner-hover">
                                                <a class="category-post tech"><?php echo $slider['titre']; ?></a>
                                                <h2><a><?php echo $slider['description']; ?></a></h2>
                                                <ul class="post-tags">
                                                    <li><i class="fa fa-clock-o"></i><?php echo $slider['date']; ?></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            <?php } ?>

                        </ul>
                    </div> <!-- EO Mise en avant SLIDER -->
                </div>







                <!-- End Slider -->


                <!-- Equipements -->
                <div class="carousel-box owl-wrapper">

                    <div class="title-section">
                        <h1>
                            <span>Des équipements pas chers et de grandes marques</span>

                        </h1>

                    </div>
                    <!-- Caroussel equipement -->
                    <div class="owl-carousel" data-num="2">
                        <div class="item">
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/accessoire.png" alt="Accessoire">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post world">Accessoires voitures</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/ampoules.png" alt="Ampoules">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post food">Ampoules voitures</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/outillage.png" alt="Outillage">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post travel">Outillages & équipements</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/pneu.png" alt="Pneu">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post fashion" href="pneus">Pneus</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/produit_nettoyage.png" alt="Produit de nettoyage">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post food">Produits de nettoyage et d'entretien du véhicule</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/plaquette.png" alt="Plaquette">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post world">Plaquettes de frein</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/huille_moteur.png" alt="Huille_moteur">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post food">Huile moteur auto</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="news-post image-post2">
                                <div class="post-gallery">
                                    <img src="static/images/produits/garages_partenaires.png" alt="Garages partenaires">
                                    <div class="hover-box">
                                        <div class="inner-hover">
                                            <a class="category-post world" href="garagesPartenaires">Garages partenaires</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div><!-- Caroussel equipement -->




                </div>

                <!-- End Equipements -->


                <!-- Pneus -->

                <div class="equipement">

                    <div class="carousel-box owl-wrapper">

                        <div class="title-section">
                            <h1>
                                <span>Des pneus de grandes marques et durables</span>
                            </h1>
                        </div>
                        <div class="owl-carousel" data-num="3">
                            <?php foreach ($pneus as $pneu) { ?>
                                <div class="item news-post image-post3">
                                    <img src="static/images/pieces/pneu/<?php echo $pneu['image']; ?>" alt="<?php echo $pneu['image']; ?>">
                                    <div class="hover-box jante">
                                        <h2>
                                            <a href="pneus"><?php echo $pneu['marque']; ?></a>
                                        </h2>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                </div>

                <!-- End Pneus -->


                <!-- Jantes -->
                <div class="carousel-box owl-wrapper">
                    <div class="title-section">
                        <h1>
                            <span>Des qualités inédites des jantes toutes marques</span>
                        </h1>
                    </div>
                    <div class="owl-carousel" data-num="3">


                        <?php foreach ($jantes as $jante) { ?>
                            <div class="item news-post image-post3">
                                <img src="static/images/pieces/jante/<?php echo $jante['image']; ?>" alt="<?php echo $jante['image']; ?>">
                                <div class="hover-box jante">
                                    <h2>
                                        <a><?php echo $jante['marque']; ?></a>
                                    </h2>
                                </div>
                            </div>
                        <?php } ?>

                    </div>
                </div>
                <!-- [EO] Jantes -->
            </div>
        </div>


        <div class="col-sm-4 col-sm-4Home">

            <!-- Pièces et accessoires -->
            <div class="sidebar">
                <div class="widget tab-posts-widget">
                    <blockquote>
                        <em><strong>Achetez vos pièces auto en ligne sur BOBO Pneus & Equipements : </strong></em>
                        <p>Vous recherchez une pièce détachée d’origine équipementier ? Nous vous proposons des pièces d’origine pour differents marques de véhicules, dont Peugeot, Citroën, Opel, Renault, Audi, Ford, BMW, Mercedes, Nissan et beaucoup d’autres encore. Explorez notre catalogue tout simplement pour trouver la pièce qu’il vous faut. Trouver la pièce compatible avec votre voiture n’aura jamais été aussi facile !</p>
                    </blockquote>

                    <ul class="nav nav-tabs" id="myTab">
                        <li class="active">
                            <a href="#auto" data-toggle="tab">PIÈCES AUTO</a>
                        </li>
                        <li>
                            <a href="#camion" data-toggle="tab">PIÈCES CAMIONS</a>
                        </li>
                        <li>
                            <a href="#accessoire" data-toggle="tab">ACCESSOIRES AUTO</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane active" id="auto">
                            <ul class="list-posts">
                                <?php foreach ($piecesautomobiles as $pieceautomobile) { ?>
                                    <li>
                                        <img src="<?php echo $pieceautomobile['image']; ?>" alt="<?php echo $pieceautomobile['image']; ?>">
                                        <div class="post-content">
                                            <h2><a><?php echo $pieceautomobile['nom']; ?></a></h2>
                                            <p><?php echo $pieceautomobile['description']; ?></p>
                                        </div>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                        <div class="tab-pane" id="camion">
                            <ul class="list-posts">

                                <?php foreach ($piecescamions as $piececamion) { ?>
                                    <li>
                                        <img src="<?php echo $piececamion['image']; ?>" alt="<?php echo $piececamion['image']; ?>">
                                        <div class="post-content">
                                            <h2><a><?php echo $piececamion['nom']; ?></a></h2>
                                            <p><?php echo $piececamion['description']; ?></p>
                                        </div>
                                    </li>
                                <?php } ?>
                            </ul>
                        </div>
                        <div class="tab-pane" id="accessoire">
                            <ul class="list-posts">

                                <?php foreach ($accessoiresautomobiles as $accessoireautomobile) { ?>
                                    <li>
                                        <img src="<?php echo $accessoireautomobile['image']; ?>" alt="<?php echo $accessoireautomobile['image']; ?>">
                                        <div class="post-content">
                                            <h2><a><?php echo $accessoireautomobile['nom']; ?></a></h2>
                                            <p><?php echo $accessoireautomobile['description']; ?></p>
                                        </div>
                                    </li>
                                <?php } ?>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- [EO] Pièces et accessoires -->
        </div>
    </div>
</div>
</section>

<style>
    .caroussel_home {
        display: flex;
    }

    .card {
        margin: 30px;
    }

    .carte {
        display: flex;
    }
</style>