<?php

// Connexion à la base
try
{
        $db = new PDO('mysql:host=bobopnodreux.mysql.db;dbname=bobopnodreux;charset=utf8', 'bobopnodreux', 'Bobopneusequipements28');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

?>