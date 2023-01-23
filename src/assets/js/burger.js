let element = document.getElementsByClassName("burger-menu")[0];

element.onclick = function () {
    //Changement de class pour ma liste
    this.classList.toggle("active");
    //Je selectionne ma classe 'collapse' 
    var classe = document.getElementsByClassName("collapse")[0];
    //Pour courroner le tout , je modifie le css en utilisant la condition en 1 ligne on apppel sa ' Opérateur ternaire (condition) ? alors : sinon ' 
    classe.style.visibility = (classe.style.visibility == 'visible') ? 'hidden' : 'visible';
    classe.style.display = (classe.style.display == 'block') ? 'none' : 'block';

}