fetch('https://raw.githubusercontent.com/thinguyen15/json-data/refs/heads/main/tyopaikat.json')
  .then(r => r.json())
  .then(data => naytaTyopaikat(data))
  .catch(e => document.getElementById("tyopaikat").innerHTML = "<p>Virhe datassa</p>");

function naytaTyopaikat(data){
    let html = "<h2>Avoimet työpaikat</h2><ul>";

    for(let i = 0; i < data.tyopaikat.length; i++){
        html += "<li><strong>" +
                data.tyopaikat[i].tyotehtava +
                "</strong> — " +
                data.tyopaikat[i].tyonantaja +
                " (" + data.tyopaikat[i].sijainti + ")" +
                "</li>";
    }

    html += "</ul>";
    document.getElementById("tyopaikat").innerHTML = html;
}
