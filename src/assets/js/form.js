






//ICi ma fonction pour cheker l'email pour le coter front  
function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
// Fonction pour cheker les numeros de téléphone 
function checkTelephone(num) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(num);
}

// Fonction pour verifier mon formulaire de contact
function validate() {

    // Et ici je selectionne mon input email dans le contact 
    var nom = document.getElementById('nom_contact').value;
    var courriel = document.getElementById('courriel').value;
    var telephone = document.getElementById('telephone_contact').value;
    var codePostale = document.getElementById('codePostal').value;
    var ville = document.getElementById('ville').value;
    var prenom = document.getElementById('prenom').value;
    var adresse = document.getElementById('adresse').value;
    var sujet = document.getElementById('sujet').value;

    // Ici se sont mes erreurs 
    var errorNom = document.getElementById('error_nom')
    var error = document.getElementById('error_email');
    var errorTelephone = document.getElementById('error_telephone');
    var errorCodePostal = document.getElementById('error_codePostal');
    var errorVille = document.getElementById('error_ville');
    var errorPrenom = document.getElementById('error_prenom');
    var errorAdress = document.getElementById('error_adress');
    var errorSujet = document.getElementById('error_sujet');



    // Ici je check l'email de mon formulaire de contact
    if (checkEmail(courriel)) {

        error.style.display = 'none';


    } else {

        error.style.display = 'block';
    }

    // Ici le numeros de téléphone 
    if (checkTelephone(telephone)) {

        errorTelephone.style.display = 'none';

    } else {

        errorTelephone.style.display = 'block';

    }

    //Condition nom 
    if (nom == "") {

        errorNom.style.display = 'block';

    } else {

        errorNom.style.display = 'none';

    }
    //Condition CodePostal
    if (codePostale == "") {

        errorCodePostal.style.display = 'block';

    } else {

        errorCodePostal.style.display = 'none';

    }
    if (ville == "") {

        errorVille.style.display = 'block';
    } else {

        errorVille.style.display = 'none';
    }

    if (prenom == "") {

        errorPrenom.style.display = 'block';

    } else {
        errorPrenom.style.display = 'none';
    }

    if (adresse == "") {

        errorAdress.style.display = 'block';

    } else {

        errorAdress.style.display = 'none';

    }

    if (sujet == "") {

        errorSujet.style.display = 'block';

    } else {
        errorSujet.style.display = 'none';
    }




}

//Fonction newsletter Verif front end 
function validateNewsletter() {
    // ICI je selectionne ma newsletter avec la valeur rentrer par l'utilisateur 
    var email_news = document.getElementById("news").value;
    var error_news = document.getElementById('error_news');

    //Condition pour ma newsletter
    if (checkEmail(email_news)) {
        error_news.style.display = 'block';

    } else if (email_news == "") {
        error_news.style.display = 'block';
    }

    else {
        error_news.style.display = 'none';
    }


}

function validate_nav() {

    // Et ici je selectionne mais input email dans le contact 
    var nomGarage = document.getElementById('nomGaragePart').value;
    var addressGarage = document.getElementById('adresseGaragePart').value;
    var emailGarage = document.getElementById('emailGarage').value;
    var phone = document.getElementById('phoneGaragePart').value;
    var prix = document.getElementById('prix').value;
    var lieuDintervention = document.getElementById('lieuDintervention').value;
    var diametre = document.getElementById('diametre').value;

    var villeIntervention = document.getElementById('villeintervention').value;
    var errorLieu = document.getElementById('error_lieu');


    // Ici se sont mes erreurs 
    var errorNomGarage = document.getElementById('error_nomGarage')
    var errorAdressGarage = document.getElementById('error_adresseGarage');
    var errorIntervention = document.getElementById('error_intervention');
    var errorPhone = document.getElementById('error_phone');
    var errorEmail = document.getElementById('errorEmailGarage');
    var errorprix = document.getElementById('error_prix');

    var errorDiametre = document.getElementById('error_diametre');
    // Ici je check l'email de mon formulaire de contact
    if (checkEmail(emailGarage)) {

        errorEmail.style.display = 'none';

    } else {

        errorEmail.style.display = 'block';
    }

    // Ici le numeros de téléphone 
    if (checkTelephone(phone)) {

        errorPhone.style.display = 'none';

    } else {

        errorPhone.style.display = 'block';
    }

    //Condition nom 
    if (nomGarage == "") {

        errorNomGarage.style.display = 'block';

    } else {

        errorNomGarage.style.display = 'none';

    }
    //Condition adresse garage
    if (addressGarage == "") {

        errorAdressGarage.style.display = 'block';

    } else {

        errorAdressGarage.style.display = 'none';

    }
    if (prix == "") {

        errorprix.style.display = 'block';
    } else {

        errorprix.style.display = 'none';
    }

    if (diametre == "") {

        errorDiametre.style.display = 'block';

    } else {

        errorDiametre.style.display = 'none';
    }

    if (addressGarage == "") {

        errorAdressGarage.style.display = 'block';

    } else {

        errorAdressGarage.style.display = 'none';

    }
    if (lieuDintervention == "") {

        errorIntervention.style.visibility = 'block';

    } else {
        errorIntervention.style.visibility = 'none';
    }





}


