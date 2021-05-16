
var boodschappentas = [];

function gaBoodschappenDoen(){
  var item = document.getElementById("boodschapitem").value;
  boodschappentas.push(item);
  toonBoodschappen();
  document.getElementById("boodschapitem").value = "";
}

function toonBoodschappen(){
  var htmlString = "";
  for (var x = 0; x < boodschappentas.length; x++) {
    htmlString += boodschappentas[x] + '<input type="button" value="X" onclick="verwijderen()"> <br>';
  }
  var deLijst = document.getElementById("lijst");
  deLijst.innerHTML = htmlString;
}

function verwijderen(){
  alert("verwijderen");
}