
<?php

// Header
include 'modules/header.php';

// Pages
if (empty($_GET['page'])) {
	include('pages/home.php');
} else if ($_GET['page'] == "garagesPartenaires") {
	include('pages/garagesPartenaires.php');
} else if ($_GET['page'] == "contact") {
	include('pages/contact.php');
} else if ($_GET['page'] == "pneus") {
	include('pages/pneus.php');
}else if ($_GET['page'] == "garages") {
	include('pages/garages.php');
}
// Modif  STAGIAIRES ! 
else if ($_GET['page'] == "piecesEquipements") {
	include('pages/piecesEquipements.php');
} else if ($_GET['page'] == "api") {
	include('pages/api.php');
} // EO Modif  STAGIAIRES  

else {
	http_response_code(404);
	die();
}

// Footer
include 'modules/footer.php';

?>
