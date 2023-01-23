<?php

// Slider
$sliders = $db->query("SELECT * FROM `slider` WHERE 1 ");
$sliders = $sliders->fetchAll(PDO::FETCH_ASSOC);

// Pneus
$pneus = $db->query("SELECT * FROM `pneus` WHERE 1");
$pneus = $pneus->fetchAll(PDO::FETCH_ASSOC);

// Jantes
$jantes = $db->query("SELECT * FROM `jantes` WHERE 1 ORDER BY `date` ");
$jantes = $jantes->fetchAll(PDO::FETCH_ASSOC);

// Pièces Automobiles
$piecesautomobiles = $db->query("SELECT * FROM `piecesautomobiles` WHERE 1 ORDER BY `date` ");
$piecesautomobiles = $piecesautomobiles->fetchAll(PDO::FETCH_ASSOC);

// Pièces Camions
$piecescamions = $db->query("SELECT * FROM `piecescamions` WHERE 1 ORDER BY `date` ");
$piecescamions = $piecescamions->fetchAll(PDO::FETCH_ASSOC);

// Accessoires Automobiles
$accessoiresautomobiles = $db->query("SELECT * FROM `accessoiresautomobiles` WHERE 1 ORDER BY `date` ");
$accessoiresautomobiles = $accessoiresautomobiles->fetchAll(PDO::FETCH_ASSOC);


// Garages Partenaires
$garagespartenaires = $db->query("SELECT * FROM `garagespartenaires` WHERE 1 ORDER BY `date` ");
$garagespartenaires = $garagespartenaires->fetchAll(PDO::FETCH_ASSOC);

//Pièces et Equipements
$piecesequipements = $db->query("SELECT * FROM `pieces_equipement` ORDER BY id LIMIT 0,5;");
$images = $db->query("SELECT images FROM `pieces_equipement` ORDER BY id; ");

//Envoie dans la base de donnée 
$images =  $images->fetchAll(PDO::FETCH_ASSOC);
$piecesequipements = $piecesequipements->fetchAll(PDO::FETCH_ASSOC);

// Pièces et Equipements - Sous catégorie 
// $sous_categories = $db->query("SELECT * FROM `sous_cat` ORDER BY id_categorie");
$sous_categories = $db->query("SELECT * FROM `sous_cat` WHERE `id_categorie` = 1 ");
// $sous_categories = $db->query("SELECT `items` FROM `sous_cat` WHERE id_categorie = 4  LIMIT 0,8 ");
$sous_categories = $sous_categories->fetchAll(PDO::FETCH_ASSOC);
