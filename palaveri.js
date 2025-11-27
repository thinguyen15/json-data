fetch('https://raw.githubusercontent.com/thinguyen15/json-data/refs/heads/main/palaveri.json')
    .then(r => r.json())
    .then(d => nayta(d));

function nayta(data){
    let t = "";

    t += "<h1>" + data.aihe + "</h1>";
    t += "<p>Paikka: " + data.paikka + "</p>";
    t += "<p>Alkaa: " + data.alku + "</p>";
    t += "<p>Kesto: " + data.kesto + " min</p>";

    t += "<h3>Osallistujat (" + data.lkm + ")</h3><ul>";
    for(let i=0; i < data.osallistujat.length; i++){
        t += "<li>" + data.osallistujat[i] + "</li>";
    }
    t += "</ul>";

    document.getElementById("palaveri").innerHTML = t;
}
