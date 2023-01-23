/**
 * 
 * API
 * 
 */

//Ici je selectionne ma div 'mapid'
let mymap = L.map('mapid').setView([46.227638, 2.213749], 8);
// Mise en place de ma map [views]
var tiles = L.esri.basemapLayer("Streets").addTo(mymap);
// create the geocoding control and add it to the map
var searchControl = L.esri.Geocoding.geosearch({
    providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
            // API Key to be passed to the ArcGIS Online Geocoding Service
            apikey: 'AAPK507046ff5e3049f9bb5955fe9e115d97yHd7t1jeko3QUI0y6JVw6Qq8mQSPmv-qCKTgH7zc-Af98VeOvzr_LahX5D1ipsyj'
        })
    ]
}).addTo(mymap);
// Résultat de recherche [input]
var results = L.layerGroup().addTo(mymap);

searchControl.on("results", function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});

var garage2 = [48.7218816, 1.3601674];
L.marker(garage2).addTo(mymap)
    .bindPopup('<strong style="text-align:center;"> Nous somme ici ! </strong><br> Adresse: <a href="https://www.google.com/maps/place/28+Rue+Pierre+Joseph,+28500+Vernouillet/@48.72311,1.3587129,17z/data=!3m1!4b1!4m5!3m4!1s0x47e15542efd24e93:0x5229a26ffc39dc84!8m2!3d48.7231065!4d1.3609016">28 rue pierre joseph 28500 vernouillet </a> <br> N° <a style="text-align:center;" href="tel:07 67 97 29 61"> 07 67 97 29 61 </a>')
    .openPopup();







