	<!-- La connection à la base de données  -->
	<?php
	include '../bd/contactBD.php';
	include '../bd/newsletter.php';
	?>


	<!-- block-wrapper-section -->
	<section class="block-wrapper">
		<div class="container">
			<div>
				<div class="col-sm-8">
					<!-- block content -->
					<div class="block-content">
						<!-- contact info box -->
						<div class="contact-info-box">
							<div class="title-section">
								<h1><span>Contacter Bobo pneus & équipements</span></h1>
							</div>

							<div id="mapid"></div>

							<p>L’équipe Bobo pneus & équipements vous remercie de votre demande d’information et s’engage à vous recontacter sous 48h maximum afin de répondre à vos questions. <br>Dans cette attente, nous restons à votre disposition par téléphone ou par mail. Intervention (à domicile, lieu de travail...) sur 50 km.</p>

						</div>
						<!-- End contact info box -->

						<!-- contact form box -->
						<div class="contact-form-box">
							<div class="title-section">
								<h1><span>Remplisser ce formulaire de contact !</span></h1>
							</div>
							<form id="contact-form" method="POST" action="../bd/contactBD.php">
								<div class="row">
									<div class="col-md-4">
										<label for="civilite">Civilité *</label>
										<select name="civilite" id="civilite">
											<option value="M.">M.</option>
											<option value="Mme">Mme</option>
											<option value="Mlle">Mlle</option>
										</select>
									</div>
									<div class="col-md-4">
										<label for="nom">Nom *</label>
										<input id="nom_contact" name="nom" type="text" required>
										<div id="error_nom" class="invalid-feedback">Veuillez entrer votre nom</div>
									</div>
									<div class="col-md-4">
										<label for="prenom">Prenom *</label>
										<input id="prenom" name="prenom" type="text" required>
										<div id="error_prenom" class="invalid-feedback">Veuillez entrer votre prénom</div>
									</div>
								</div>

								<div class="row">
									<div class="col-md-4">
										<label for="email">Courriel *</label>
										<input id="courriel" id="email" name="emailcontact" type="text" required>
										<div id="error_email" class="invalid-feedback">Veuillez vérifier votre adresse E-mail </div>
									</div>
									<div class="col-md-4">
										<label for="telephone">Téléphone *</label>
										<input id="telephone_contact" name="telephone" type="text" min="10" required>
										<div id="error_telephone" class="invalid-feedback">Veuillez vérifier le format de votre N° de téléphone </div>
									</div>
									<div class="col-md-4">
										<label for="fax">Fax</label>
										<input id="fax" name="fax" type="text">
									</div>
								</div>

								<div class="row">
									<div class="col-md-4">
										<label for="adresse">Adresse *</label>
										<input id="adresse" name="adresse" type="text" required>
										<div id="error_adress" class="invalid-feedback">Veuillez entrer votre adresse </div>
									</div>
									<div class="col-md-4">
										<label for="CP">Code postal *</label>
										<input id="codePostal" name="cp" type="text" required>
										<div id="error_codePostal" class="invalid-feedback">Veuillez entrer un code postal</div>
									</div>
									<div class="col-md-4">
										<label for="telephone">Ville *</label>
										<input id="ville" name="ville" type="text" required>
										<div id="error_ville" class="invalid-feedback">Veuillez entrer votre ville</div>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<label for="garage">Garage</label>
										<input id="garage" name="garage" type="text">
									</div>
									<div class="col-md-6">
										<label for="CP">Sujet *</label>
										<input id="sujet" name="sujet" type="text" required>
										<div id="error_sujet" class="invalid-feedback">Veuillez entrer un sujet </div>
									</div>
								</div>
								<label for="message">Message *</label>
								<textarea id="message" name="message" required></textarea>
						</div>
						<div>
							<span class="txt-small champsObligatoires">* Champs obligatoires</span>
						</div></br>

						<div id="captcha" class="g-recaptcha" data-sitekey="6Lc1zDocAAAAAIXP0wNP3_M4r0i6g2smrImsbipO" data-callback='onSubmit' data-action='submit'> </div>

						<script>
							var response = grecaptcha.getResponse();
							var captcha = document.getElementById('error_captcha');

							function get_action(form) {
								var v = grecaptcha.getResponse();
								if (v.length == 0) {

									document.getElementById('error_captcha').style.display = 'none';
									return false;

								} else {

									document.getElementById('error_captcha').style.display = 'block';
									return true;
								}
							}
							get_action('bouton');
						</script>
						<span id="captcha" style="margin-left:100px;color:red"></span>
						<button id="bouton" onclick='validate()' name="contact" class="btn btn-outline-secondary btnEnvoie" type="submit">
							<i class="fas fa-paper-plane"></i> Envoyer
						</button>
						</form>
					</div>
					<!-- End contact form box -->
				</div>
				<!-- End block content -->
			</div>





			</script>

			<div class="col-sm-4">
				<!-- sidebar -->
				<div class="sidebar">
					<div class="widget social-widget">
						<div class="title-section">
							<h1><span>Rester connecté</span></h1>
						</div>
						<ul class="social-share">
							<li>
								<a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
								<span class="number">56,743</span>
								<span>Fans</span>
							</li>
							<li>
								<a href="#" class="snapchat"><i class="fab fa-snapchat-ghost"></i></a>
								<span class="number">9,455</span>
								<span>Subscribers</span>
							</li>
							<li>
								<a href="tel:07 67 97 29 61" class="whatsapp"><i class="fab fa-whatsapp"></i></a>
								<span class="number">43,501</span>
								<span>Followers</span>
							</li>
						</ul>
					</div>
					<div class="widget flickr-widget">
						<div class="title-section">
							<h1><span>Abonnez-vous et rester à l'écoute !</span></h1>
						</div>
						<!-- Newsletter -->
						<div class="widget subscribe-widget">
							<form method="POST" action="../bd/newsletter.php" class="subscribe-form">

								<h1>Votre newsletter</h1>
								<input id="news" type="text" name="email" id="subscribe" placeholder="Email" required />
								<button type="submit" id="submit-subscribe" onclick='validateNewsletter()' name="newsletter">
									<i class="fa fa-arrow-circle-right"></i>
								</button>
								<div id="error_news" class="invalid-feedback">Veuillez vérifier votre adresse E-mail </div>

								<p style="text-align: justify">En vous abonant vous acceptez de recevoir l'infolettre contenant les offres spéciales. Vous pouvez vous désabonner à tout moment.</p>
							</form>
							<p>Veuillez tenir compte de notre <a href="#"><em>politique de confidentialité.</em></a></p>
						</div>
						<!--[EO] Newsletter -->
					</div>

					<div class="widget tags-widget">

						<div class="title-section">
							<h1><span>Simplifier vos recherches</span></h1>
						</div>

						<ul class="tag-list">
							<li><a href="pneus">Pneus</a></li>
							<li><a href="pneus">Jantes</a></li>
							<li><a href="pneus">Pièces autos</a></li>
							<li><a href="#">Pièces camions</a></li>
							<li><a href="#">Pièces motos</a></li>
							<li><a href="#">Accèssoires</a></li>
							<li><a href="#">Équipements</a></li>
							<li><a href="#">Garages partenaires</a></li>
							<li><a href="#">Outillages</a></li>
							<li><a href="#">Marques</a></li>
						</ul>

					</div>
				</div>
				<!-- End sidebar -->
			</div>
		</div>
		</div>
	</section>



	<!-- End block-wrapper-section -->