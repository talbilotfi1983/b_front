/**
 * 
 * GARAGE PARTENAIRE 
 * 
 */


//Ici je selectionne ma div 'mapidPart' pour garages partenaires 
let mymap2 = L.map('mapidPart').setView([46.227638, 2.213749], 8);

// Mise en place de ma map 
var tiles = L.esri.basemapLayer("Streets").addTo(mymap2);

// create the geocoding control and add it to the map
var searchControl = L.esri.Geocoding.geosearch({
    providers: [
        L.esri.Geocoding.arcgisOnlineProvider({
            // API Key to be passed to the ArcGIS Online Geocoding Service
            apikey: 'AAPK507046ff5e3049f9bb5955fe9e115d97yHd7t1jeko3QUI0y6JVw6Qq8mQSPmv-qCKTgH7zc-Af98VeOvzr_LahX5D1ipsyj'
        })
    ]
}).addTo(mymap2);

// Résultat de recherche [input]
var results = L.layerGroup().addTo(mymap2);

searchControl.on("results", function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});
// [EO] Résultat de recherche [input]
// Mise en place de mes pop UP 
var garage1 = [48.41385, 1.8772437];
var garage2 = [48.7218816, 1.3601674];
var garage3 = [48.4377898, 1.4909951];
var garage4 = [48.4352629, 1.4647554];
var garage5 = [48.418875, 1.4663167];
var garage6 = [48.4168821, 1.451114];
var garage7 = [48.4402253, 1.5251471];
var garage8 = [48.4178136, 1.4611257];
var garage9 = [48.4009435012394, 1.385925955549542];
var garage10 = [48.71936243772121, 1.3743041537117557];
var garage11 = [48.67379355426414, 1.382042916927335];
var garage12 = [48.894683481079944, 1.2734164555664962];
var garage13 = [48.91275702611668, 1.4445068829997496];
var garage14 = [48.57681735805592, 1.2363375555555756];
var garage15 = [48.739793486603894, 1.3557149709032865];
var garage16 = [];



//Mise en place de mais 'pointeur'
L.marker(garage1).addTo(mymap2)
    .bindPopup('<strong> A à Z pneu </strong><br> Adresse: <a href="https://www.google.com/maps/place/21+Rue+Jean+Guillien,+28700+Sainville/@48.4139544,1.8753321,17z/data=!3m1!4b1!4m5!3m4!1s0x47e438300c4ac371:0xf425b954db753d95!8m2!3d48.4139544!4d1.8775208">21 rue jean guillien 28700 Sainville </a>')
    .openPopup();

L.marker(garage2).addTo(mymap2)
    .bindPopup('<strong> Bobopneus </strong><br> Adresse: <a href="https://www.google.com/maps/place/28+Rue+Pierre+Joseph,+28500+Vernouillet/@48.72311,1.3587129,17z/data=!3m1!4b1!4m5!3m4!1s0x47e15542efd24e93:0x5229a26ffc39dc84!8m2!3d48.7231065!4d1.3609016">28 rue pierre joseph 28500 vernouillet </a>')
    .openPopup();

L.marker(garage3).addTo(mymap2)
    .bindPopup('<strong> Chartres auto passion </strong><br> Adresse: <a href="https://www.google.com/maps/place/27+Rue+de+Reverdy,+28000+Chartres/@48.4378845,1.4895788,3a,75y,168.94h,80.88t/data=!3m6!1e1!3m4!1sYlq-oSpvoXsUVCaVGHWYcw!2e0!7i16384!8i8192!4m5!3m4!1s0x47e40c504a8cffe3:0xcd2a30cbc855aedd!8m2!3d48.4378135!4d1.489484"> 27 RUE DE REVERDY 28000 CHARTRES </a>')
    .openPopup();

L.marker(garage4).addTo(mymap2)
    .bindPopup('<strong> Evo centre auto </strong><br> Adresse:  <a href="https://www.google.com/maps/place/92+Rue+Fran%C3%A7ois+Foreau,+28110+Luc%C3%A9/@48.4346253,1.4629175,17z/data=!3m1!4b1!4m5!3m4!1s0x47e40c7b4d7f402b:0x8d4addd08eda1602!8m2!3d48.4346218!4d1.4651062">92 RUE FRANCOIS FOREAU 28110 LUCE</a>')
    .openPopup();

L.marker(garage5).addTo(mymap2)
    .bindPopup('<strong> PNEUS MALIN </strong><br> Adresse: <a href="https://www.google.com/maps/place/43+Av.+de+la+R%C3%A9publique,+28600+Luisant/@48.4249524,1.4692471,17z/data=!4m13!1m7!3m6!1s0x47e40c8b8d12cb19:0x15ae0672bce77aae!2s43+Av.+de+la+R%C3%A9publique,+28600+Luisant!3b1!8m2!3d48.4249489!4d1.4714358!3m4!1s0x47e40c8b8d12cb19:0x15ae0672bce77aae!8m2!3d48.4249489!4d1.4714358">43 avenue de la republique 28600 luisant</a>')
    .openPopup();

L.marker(garage6).addTo(mymap2)
    .bindPopup('<strong> JUPITER PNEUS </strong> <br> Adresse: <a href="https://www.google.com/maps/place/16+Rue+Jean+Perrin,+28600+Luisant/@48.4169583,1.4489512,17z/data=!3m1!4b1!4m5!3m4!1s0x47e40b62f8202ddb:0x5b9b4d137c130532!8m2!3d48.4169548!4d1.4511399">16 Rue jean perrin 28600 LUISANT</span>')
    .openPopup();

L.marker(garage7).addTo(mymap2)
    .bindPopup('<strong> HERMAN MICHEL</strong> <br> Adresse: <a href="https://www.google.com/maps/place/15+Rue+Ren%C3%A9+Cassin,+28000+Chartres/@48.4410573,1.5231821,17z/data=!3m1!4b1!4m5!3m4!1s0x47e40d972a758621:0x1d36339c2312de1f!8m2!3d48.4410538!4d1.5253708"> 15 rue René Cassin 28000 CHARTRES</a> ')
    .openPopup();

L.marker(garage8).addTo(mymap2)
    .bindPopup('<strong> DELKO LUISANT </strong> <br> Adresse: <a href="https://www.google.com/maps/place/15+Rue+Jean+Perrin,+28600+Luisant/@48.417503,1.4516779,17z/data=!3m1!4b1!4m5!3m4!1s0x47e40c9d779f5b59:0x5f4d33f19b12153f!8m2!3d48.4174995!4d1.4538666"> 15 rue Jean PERRIN 28600 LUISANT</a>')
    .openPopup();

L.marker(garage9).addTo(mymap2)
    .bindPopup('<strong> YD automobiles </strong><br> Adresse: <a href="https://www.google.com/maps/place/22+Rue+Jean+Riedberger,+28630+Fontenay-sur-Eure/@48.4007547,1.3837158,17z/data=!3m1!4b1!4m5!3m4!1s0x47e40ab821ecb775:0xe9d7f08fd4d6f2de!8m2!3d48.4007512!4d1.3859045">22 rue riedberger Le Pont Tranchefêtu 28630 Fontenay sur Eure</a>')
    .openPopup();

L.marker(garage10).addTo(mymap2)
    .bindPopup('<strong> Jumbo Pneus Dreux-Vernouillet </strong><br> Adresse: <a href="https://www.google.com/maps/place/80+Rue+de+Nuisement,+28100+Vernouillet/@48.719189,1.3721691,17z/data=!3m1!4b1!4m5!3m4!1s0x47e1555197161741:0x747b3aff4b8147e7!8m2!3d48.7191855!4d1.3743578"> 80 rue de nuisement 28500 VERNOUILLET</a>')
    .openPopup();

L.marker(garage11).addTo(mymap2)
    .bindPopup('<strong> Marville Services Automobile </strong><br> Adresse: <a href="https://www.google.com/maps/place/Rue+Fief+Saint-Martin,+28500+Marville-Moutiers-Br%C3%BBle/@48.6727289,1.3821633,17z/data=!3m1!4b1!4m5!3m4!1s0x47e4007dd4088f5b:0x73e7118302f4e35d!8m2!3d48.6727254!4d1.384352"> Rue du Fief Saint-Martin 28500 Marville Moutiers Brûlé </a>')
    .openPopup();

L.marker(garage12).addTo(mymap2)
    .bindPopup('<strong> CAMERON CARROSSERIE </strong><br> Adresse: <a href=" https://www.google.com/maps/place/Rue+de+la+Mare+Chanceuse,+27220+Saint-Andr%C3%A9-de-lEure/@48.8944895,1.2712063,17z/data=!3m1!4b1!4m5!3m4!1s0x47e14e47371607eb:0x78fb0afdc14c7565!8m2!3d48.894486!4d1.273395"> RUE DE LA MARE CHANCEUSE 27220 ST ANDRE DE L EURE </a>')
    .openPopup();

L.marker(garage13).addTo(mymap2)
    .bindPopup('<strong> L2R CONCEPT </strong> <br> Adresse: <a href="https://www.google.com/maps/search/5+ZA+CHAMP+DE+GRENELLE+27780+GARENNES+SUR+EURE/@48.9120942,1.4357092,15z/data=!3m1!4b1">5 ZA CHAMP DE GRENELLE 27780 GARENNES SUR EURE </a>')
    .openPopup();

L.marker(garage14).addTo(mymap2)
    .bindPopup('<strong> SARL NAVEAU </strong><br>Adresse: <a href="https://www.google.com/maps/place/Garage+Naveau/@48.5767286,1.2341274,17z/data=!3m1!4b1!4m5!3m4!1s0x47e3faf14986eb59:0xa9529ad69b2eb1ea!8m2!3d48.5767251!4d1.2363161"> route du Mans bp 21 agence Renault 28170 CHATEAUNEUF en THYMERAIS </a>')
    .openPopup();

L.marker(garage15).addTo(mymap2)
    .bindPopup('<strong> Le Pneu Neuf </strong><br>Adresse: <a href="https://www.google.com/maps/place/115+Rue+du+Bois+Sabot,+28100+Dreux/@48.7396838,1.3534619,17z/data=!3m1!4b1!4m5!3m4!1s0x47e155173bc5129d:0x42532d8d39a67871!8m2!3d48.7396803!4d1.3556506"> 115 Rue du Bois Sabot 28100 Dreux </a>')
    .bindTooltip()
    .openPopup();

// Controle 
var scale = L.control.scale();
// Mise en place de mon controle
scale.addTo(mymap2);


