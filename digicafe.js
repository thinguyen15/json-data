fetch('https://raw.githubusercontent.com/thinguyen15/json-data/refs/heads/main/digicafe.json')
  .then(r => r.json())
  .then(data => naytaCafe(data))
  .catch(e => document.getElementById("cafe").innerHTML = "<p>Virhe ladattaessa</p>");

function naytaCafe(data) {
    let t = "";

    t += "<h1>" + data.yritys + "</h1>";
    t += "<h3>Yhteystiedot</h3>";
    t += "<p>" + data.yhteystiedot.osoite + "</p>";
    t += "<p>" + data.yhteystiedot.puhelin + "</p>";
    t += "<p>" + data.yhteystiedot.email + "</p>";

    t += "<h3>Tuotteet</h3><ul>";
    for(let i = 0; i < data.tuotteet.length; i++){
        t += "<li>" + data.tuotteet[i] + "</li>";
    }
    t += "</ul>";

    t += "<h3>Henkilökunta</h3>";
    for(let i = 0; i < data.henkilokunta.length; i++){
        t += "<p>" + data.henkilokunta[i].nimi + " – " + data.henkilokunta[i].titteli + "</p>";
    }

    document.getElementById("cafe").innerHTML = t;
}
