<?php

// Connexion à la base
include 'config/connexion.php';
include 'config/bdd.php';

?>

<!-- Container -->
<div id="container">
	<section class="block-wrapper">
		<div class="container">
			<div class="row" style="display:flex ;">
				<!-- <div class="col-sm-12 apiPneu">
					<script src="https://cdn.tiresleader.com/static/js/module.js"></script>
					<div id="divModAdFrame" data-key="0RXYwdysqBPnwLQUTTALJBkoquABr9k0iDlBhbUY" data-host="www.centralepneus.fr"></div>

				</div> -->
				<div class="col-md-5">1</div>
				<div class="col-md-offset-1"></div>


				<div class="col-md-6">

					<div class="wrapper">
						<div class="slider-container">
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr (1).jpg">
							</div>
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr (2).jpg">
							</div>
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr (3).jpg">
							</div>
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr (4).jpg">
							</div>
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr (5).jpg">
							</div>
							<div class="slide-image">
								<img src="static/images/slider-api/banner_image__fr.jpg">
							</div>
						</div>
					</div>


					<div class="navigation-dots">
						<!-- <div class="single-cube active"></div>
						<div class="single-cube"></div>
						<div class="single-cube"></div>
						<div class="single-cube"></div> -->
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<script>
	const slideImage = document.querySelectorAll(".slide-image");
	const slideContainer = document.querySelector(".slider-container");
	const navigationDots = document.querySelector(".navigation-dots");

	let numberOfImages = slideImage.length;
	let slideWidth = slideImage[0].clientWidth;
	let currentSlide = 0;

	function init() {
		slideImage.forEach((img, i) => {
			img.style.left = i * 100 + "%";
		});

		slideImage[0].classList.add("active");

		createNavigationDots();
	}

	init();

	function createNavigationDots() {
		for (let i = 0; i < numberOfImages; i++) {
			const dot = document.createElement("div");
			dot.classList.add("single-cube");
			navigationDots.appendChild(dot);

			dot.addEventListener("click", () => {
				goToSlide(i);
			})
		}

		navigationDots.children[0].classList.add("active");
	}

	function goToSlide(slideNumber) {
		slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";
		currentSlide = slideNumber;
		setActiveClass();
	}

	function setActiveClass() {
		let currentActive = document.querySelector(".slide-image.active");
		currentActive.classList.remove("active");
		slideImage[currentSlide].classList.add("active");

		let currentDot = document.querySelector(".single-cube.active");
		currentDot.classList.remove("active");
		navigationDots.children[currentSlide].classList.add("active");
	}
</script>