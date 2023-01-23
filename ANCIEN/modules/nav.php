<header class="clearfix">
    <!-- Bootstrap navbar -->
    <nav class="navbar navbar-default navbar-static-top">

        <!-- Top line -->
        <!-- <div class="top-line">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        
                        <ul class="top-line-list">
                            <li class="li">
                                <span class="time-now"> <a href="https://goo.gl/maps/W2K3JukhnhzDeCAV6" target="__black">28 rue pierre joseph 28500 VERNOUILLET</a></span>
                            </li>
                            <li class="li">
                                <span class="time-now"><a href="tel:07 67 97 29 61">07 67 97 29 61</a></span>
                            </li>
                            <li class="li">
                                <a href="mailto:bobopneus@gmail.com">bobopneus@gmail.com</a>
                            </li>
                            <li class="li">
                                <a class="facebook" target="__black" href="https://www.facebook.com/BOBO-Pneus-et-Equipements-106899104355485/?modal=admin_todo_tour">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </li>

                            <li class="li">
                                <a class="linkedin" target="__black" href="#">
                                    <i class="fab fa-snapchat-ghost"></i>
                                </a>
                            </li>

                            <li class="li">
                                <a class="linkedin" target="__black" href="tel:07 67 97 29 61">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </li>
                            <li>
                                <span class="time-now"><button onclick="document.getElementById('id01').style.display='block'">Inscription garages</button></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>-->

        <!-- End Top line -->
        <div id="id01" class="modal">
            <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>

            <!-- block content -->
            <div class="block-content-partenaire">

                <!-- contact form box -->
                <div class="contact-form-box">
                    <div class="title-section">
                        <h1>
                            <span>Vous êtes un centre de montage de pneus ou un garage ? Inscrivez-vous :</span>
                        </h1>
                    </div>
                    <form id="contact-form" method="POST" action="../bd/inscriptionPartenaireBD.php" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-md-4">
                                <label for="name">Nom de garage*</label>
                                <input id="nomGaragePart" name="nom_garage" type="text" placeholder="Votre garage" required>
                                <div id="error_nomGarage" class="invalid-feedback"> Veuillez entrez un nom de garage . </div>
                            </div>
                            <div class="col-md-4">
                                <label for="name">Adresse*</label>
                                <input id="adresseGaragePart" name="adresse_garage" type="text" placeholder="Adresse du garage" required>
                                <div id="error_adresseGarage" class="invalid-feedback"> Veuillez entrer un nom de garage . </div>
                            </div>
                            <div class="col-md-4">
                                <label for="name">Ville(s) d'intervention*</label>
                                <input id="villeintervention" name="ville_garage" type="text" placeholder="Ville" required>
                                <div id="error_intervention" class="invalid-feedback"> Veuillez faire un choix d'intervention .</div>
                            </div>
                            <div class="col-md-4">
                                <label for="mail">Téléphone*</label>
                                <input id="phoneGaragePart" name="telephone_garage" type="text" placeholder="Numéro de téléphone">
                                <div id="error_phone" class="invalid-feedback"> Veuillez entrez un N° valide . </div>

                            </div>
                            <div class="col-md-4">
                                <label for="name">Email*</label>
                                <input id="emailGarage" name="email_garage" type="text" placeholder="Votre adresse mail" required>
                                <div id="errorEmailGarage" class="invalid-feedback"> Veuillez vérifier votre adresse E-mail . </div>
                            </div>
                            <div class="col-md-4">
                                <label for="frites">Prix* </label>
                                <input id="prix" name="prix_garage" type="int" placeholder="EX : 20€" required>
                                <div id="error_prix" class="invalid-feedback"> Veuillez entrez votre prix </div>

                            </div>
                            <div class="col-md-4">
                                <label for="frites">Lieu d'intervention* </label>
                                <select id="lieuDintervention" class="formSelectPieceSurface" name="lieu_intervation_garage">
                                    <option value="À domicile">À domicile</option>
                                    <option value="Au garage">Au garage</option>
                                    <option value="Dans un rayon de 25km">Dans un rayon de 25km</option>
                                    <option value="Dans un rayon de 50km">Dans un rayon de 50km</option>
                                    <option value="Dans un rayon de 75km">Dans un rayon de 75km</option>
                                    <option value="Dans un rayon de 100km ou +">Dans un rayon de 100km ou +</option>
                                </select>
                                <div id="error_lieu" class="invalid-feedback"> Veuillez choisir un lieu d'intervention. </div>

                            </div>
                            <div class="col-md-4">
                                <label for="frites">Diamètre maximum*</label>
                                <input id="diametre" name="diametre_pneu" type="text" placeholder='EX : 24", 18" ' required>
                                <div id="error_diametre" class="invalid-feedback"> Veuillez choisir le diametre des pneus . </div>
                            </div>
                            <div class="col-md-4">
                                <label for="frites">Logo du (garage ou entreprise) </label>
                                <input id="mail" name="logo_garage" type="file">
                            </div>
                            <div class="col-md-12">
                                <label for="frites">Observation </label>
                                <input id="mail" name="observation" type="text" placeholder="Votre observation">
                            </div>
                        </div>
                        <div>
                            <span class="txt-small champsObligatoires">* Champs obligatoires </span>
                        </div></br></br>
                        <div class="g-recaptcha" data-sitekey="6Lc1zDocAAAAAIXP0wNP3_M4r0i6g2smrImsbipO" data-callback='onSubmit' data-action='submit'></div>
                        <button onclick="validate_nav()" type="submit" id="submit-contact" name="inscriptionsGarages">
                            <i class="far fa-paper-plane"></i>Soumettre
                        </button>

                    </form>
                </div>
                <!-- End contact form box -->
            </div>
            <!-- End block content -->
        </div>

        <script>
            // Get the modal
            var modal = document.getElementById('id01');

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        </script>

        <!-- list line posts -->
        <div class="list-line-posts">
            <div class="container marquesPartenaires">
                <div class="owl-wrapper">
                    <div class="owl-carousel" data-num="3">

                        <?php foreach ($concepteursautos as $concepteurauto) { ?>
                            <div class="item list-post">
                                <img src="https://www.bobopneus-equipements.com/static/images/partenaires/<?php echo $concepteurauto['image']; ?>" alt="<?php echo $concepteurauto['image']; ?>">
                                <div class="post-content">
                                    <a href="food.html"><?php echo $concepteurauto['marque']; ?></a>
                                    <h2>
                                        <a href="single-post.html"><?php echo $concepteurauto['description']; ?></a>
                                    </h2>
                                </div>
                            </div>
                        <?php } ?>

                    </div>
                </div>
            </div>
        </div>
        <!-- End list line posts -->

        <!-- navbar list container -->
        <div class="nav-list-container">
            <div class="container">
            <a class="navbar-brand" href="/"><img src="static/images/logo/logo.png" alt=""></a>
                <!-- Ici je met mon burger en utilisant la methode 'ajax' -->
                <div class="burg">
                    <a href="/"><img class="img_logo" src="static/images/logo/logo.png" alt=""></a>
                    <div class="burger-menu">
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                        <div class="burger-line"></div>
                    </div>
                </div>
                <!-- [eo] burger -->

                <!-- Navigation  -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
                    <ul class="nav navbar-nav">
                        <li><a class="home" href="index"><i class="fas fa-home"></i></a></li>
                        <li><a class="tech" href="pneus">Pneus</a></li>
                        <li><a class="tech" href="pneus">pneu auto</a></li>
                        <li><a class="tech" href="pneus">pneu moto</a></li>
                        <li><a class="tech" href="pneus">pneu quad</a></li>
                        <li><a class="tech" href="pneus">pneu camion</a></li>
                        <li><a class="tech" href="pneus">pneu agricole</a></li>
                        <li><a class="fashion" href="garagesPartenaires">Garages Partenaires</a></li>
                        <li><a class="sport" href="contact">contact</a></li>
                        <li><span class="time-now"><button onclick="document.getElementById('id01').style.display='block'">Inscription garages</button></span></li>
                    </ul>
                    <!--form class="navbar-form navbar-right" role="search">
                        <input type="text" id="myInput" name="search" placeholder="Que cherchez vous ?">
                        <button type="submit" id="search-submit">
                            <i class="fa fa-search"></i>
                        </button>

                    </form-->
                </div>
                <!-- EO Navigation  -->


            </div>
        </div>
        <!-- End navbar list container -->

    </nav>
    <!-- End Bootstrap navbar -->

    <script>

    </script>


    <!-- [EO] MODIF STAGIRAIRES -->


</header>
<!-- End Header -->