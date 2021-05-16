
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
    htmlString += boodschappentas[x] + '<input type="button" value="X" onclick=verwijderen("+x+")> <br>';
  }
  var deLijst = document.getElementById("lijst");
  deLijst.innerHTML = htmlString;
}

// Een functie waarbij je een toegevoegde item weer kunt verwijderen
function verwijderen(index){
  boodschappentas.splice(index,1);
  toonBoodschappen();
}

// Een functie waarbij je met enter de items kunt toevoegen, de keycode van enter is 13
function voegtoe(e) {
  if(e.keyCode == 13){
    gaBoodschappenDoen();
  }
}