<?php

// Connexion à la base
include 'config/connexion.php';
include 'config/bdd.php';

?>

<!-- Container -->
<div id="container">
	<section class="block-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-sm-12">
					<div class="title-section">
						<h1><span>Nos garages partenaires et centres de montage de pneus</span></h1>
					</div>
					<div class="widget tab-posts-widget">
						<blockquote>
							<em><strong>Achetez vos pièces auto en ligne sur BOBO Pneus & Equipements : </strong></em>
							<p>Un service après-vente complet. Pour vous faire livrer les pneus au plus près de chez vous, nous avons conclu des partenariats avec plus de 4700 garages partenaires et centres de montage de pneus en France !</p>
						</blockquote>
						<div class="single-post-box">
							<div class="review-box">
								<div class="summary-box">
									<h2>Trouvez un centre de montage près de chez vous</h2>
									<p>Vous souhaitez faire le montage de vos pneumatiques mais vous ne savez pas dans quel centre le faire ? Trouver un garage partenaire à proximité de chez vous, c’est très simple ! </p>
									<div class="summary-degree">
										<p><span>8.9</span>Excellent!</p>
									</div>

								</div>
							</div>
						</div>
					</div>
					<!-- End block content -->
					<!-- API GOOGLE [LEAFLET] -->
					<div class="container">
						<div class="contact-info-box">
							<div class="title-section">
								<h1><span>Trouver votre garage Partenaires !</span></h1>
							</div>
							<!-- <div id="map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2632.077725311476!2d1.3587129159694247!3d48.72310647927441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e15542efd24e93%3A0x5229a26ffc39dc84!2s28%20Rue%20Pierre%20Joseph%2C%2028500%20Vernouillet!5e0!3m2!1sfr!2sfr!4v1600347418203!5m2!1sfr!2sfr" width="750" height="350" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div> -->
							<div id="mapidPart"></div>
						</div>
						<!-- API GOOGLE [LEAFLET] -->
						<div class="article-box">
							<div class="title-section">
								<h1><span>Nos garages partenaires</span></h1>
							</div>


							<?php foreach ($garagespartenaires as $garagepartenaire) { ?>
								<div class="news-post article-post">
									<div class="row">
										<div class="col-sm-2">
											<div class="post-gallery">
												<img src="static/images/logo/<?php echo $garagepartenaire['logo_garage']; ?>" alt="<?php echo $garagepartenaire['logo_garage']; ?>">
											</div>
										</div>
										<div class=" info col-sm-10">
											<div class="post-content">
												<h2><a href="single-post.html"><?php echo $garagepartenaire['nom_garage']; ?></a></h2>
												<ul class="post-tags">
													<li><i class="fas fa-phone"></i>Tél : <a href="tel:<?php echo $garagepartenaire['telephone_garage']; ?>"><?php echo $garagepartenaire['telephone_garage']; ?></a></li>
													<li><i class="far fa-envelope"></i>Email : <a href="mailto:<?php echo $garagepartenaire['email_garage']; ?>"><?php echo $garagepartenaire['email_garage']; ?></a></li>
													<li><i class="fas fa-hand-holding-usd"></i>A partir de : <span><?php echo $garagepartenaire['prix_garage']; ?> €</span></li></br>
													<li><i class="fas fa-circle-notch"></i>Diamètre maxi : <?php echo $garagepartenaire['diametre_pneu']; ?></li>
													<li><i class="far fa-clock"></i>Partenaire depuis : <?php echo $garagepartenaire['date']; ?></li>
													<li>
														<span class="post-rating">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
														</span>
													</li>
												</ul>

												<div class="detailsGaragesPartenaires">

													<p><i class="fas fa-map-marker-alt"></i><a target="_black" href="<?php echo $garagepartenaire['adresse_garage']; ?><?php echo $garagepartenaire['ville_garage']; ?>"><?php echo $garagepartenaire['adresse_garage']; ?> <?php echo $garagepartenaire['ville_garage']; ?></p></a>

													<button type="button" class="btn btn-outline-secondary btnPlusDetails" onclick="document.getElementById('id02').style.display='block'"> Plus de détails <i class="fas fa-directions"></i>
													</button>

													<!-- Modal -->
													<div id="id02" class="modal">
														<span onclick="document.getElementById('id02').style.display='none'" class="close" title="Close Modal">&times;</span>

														<section class="block-wrapper">
															<div class="container">
																<div class="row">
																	<div class="col-sm-9">

																		<!-- block content -->
																		<div class="block-content">

																			<!-- forum box -->
																			<div class="forum-box">
																				<div class="forum-table">
																					<div class="table-head">
																						<div class="first-col"><span>Montage auto</span></div>
																						<div class="second-col"><span>Horaires d'ouverture</span></div>
																						<div class="third-col"><span>Bobopneus</span></div>
																					</div>
																					<div class="table-row">
																						<div class="first-col">
																							<ul>
																								<li class="garage-liste-service">Prix par pneu sur jante tôle :	<?php echo $garagepartenaire['prix_garage']; ?> €</li>
																								<li class="garage-liste-service">Diamètre maxi : <?php echo $garagepartenaire['diametre_pneu']; ?></li>
																								<li class="garage-liste-service">Gonflage à l'azote : 	non</li>
																								<li class="garage-liste-service">Géométrie :	non</li>
																								<li class="garage-liste-service">Runflat :	oui</li>
																								<li class="garage-liste-service">TPMS :	non</li>
																							</ul>																						
																						</div>
																						<div class="second-col">
																							<li class="garage-liste-service">lundi :	08:00 - 18:00</li>
																							<li class="garage-liste-service">mardi :	08:00 - 18:00</li>
																							<li class="garage-liste-service">mercredi :	08:00 - 18:00</li>
																							<li class="garage-liste-service">jeudi :	08:00 - 18:00</li>
																							<li class="garage-liste-service">vendredi :	08:00 - 18:00</li>
																							<li class="garage-liste-service">samedi :	fermé</li>
																							<li class="garage-liste-service">dimanche :	fermé</li>
																						</div>
																						<div class="third-col">
																							<img src="static/images/logo/<?php echo $garagepartenaire['logo_garage']; ?>" alt="static/images/logo/<?php echo $garagepartenaire['logo_garage']; ?>">
																							<div class="post-autor-date">
																								<p><a href="#"><?php echo $garagepartenaire['nom_garage']; ?></a></p>
																								<p>Tél. : <?php echo $garagepartenaire['telephone_garage']; ?></p>
																							</div>
																						</div>
																					</div>
																					
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</section>
														
													</div>


													<script>
														// Get the modal
														var modal = document.getElementById('id02');

														// When the user clicks anywhere outside of the modal, close it
														window.onclick = function(event) {
															if (event.target == modal) {
																modal.style.display = "none";
															}
														}
													</script>

												</div>

											</div>
										</div>
									</div>
								</div>
							<?php } ?>

							<!-- Pagination -->
							<div class="pagination-box">
								<ul class="pagination-list">
									<li><a class="active" href="#">1</a></li>
									<li><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><span>...</span></li>
									<li><a href="#">9</a></li>
									<li><a href="#">Suivant</a></li>
								</ul>
								<p>Page 1 à 9</p>
							</div>
							<!-- End Pagination -->

						</div>
					</div>
					<!-- EO Modif STAGIAIRES -->

					<!-- Liste des garages partenaires -->

					<!-- End Liste des garages partenaires -->
				</div>
			</div>
		</div>
	</section>
</div>