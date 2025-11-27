fetch('https://jaakkola.github.io/json/digitekniikat.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        kerro(data);
    })
    .catch(function(error) {
        document.getElementById("vastaus").innerHTML =
        "<p>Tietoa ei pystytä hakemaan</p>";
    });


function kerro(data){
    var teksti = "";

    teksti += "<h1>" + data.otsikko + "</h1>";
    teksti += "<p>" + data.kuvaus + "</p>";
    teksti += "<img src='" + data.kuva + "' alt='kuva'>";

    teksti += "<h3>Opintojakso: " + data.opintojakso.nimi + "</h3>";
    teksti += "<p>Tunnus: " + data.opintojakso.tunnus + "</p>";
    teksti += "<p>Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

    teksti += "<h3>Sisältö</h3><ul>";
    for(var i = 0; i < data.sisalto.length; i++) {
        teksti += "<li>" + data.sisalto[i] + "</li>";
    }
    teksti += "</ul>";

    teksti += "<h3>Tekniikat</h3>";
    for(var i = 0; i < data.tekniikat.length; i++) {
        teksti += "<p><a href='" + data.tekniikat[i].linkki + "' target='_blank'>" 
        + data.tekniikat[i].aihe + "</a></p>";
    }

    document.getElementById("vastaus").innerHTML = teksti;
}
