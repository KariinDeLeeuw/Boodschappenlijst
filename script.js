
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

function verwijderen(index){
  boodschappentas.splice(index,1);
  console.log(boodschappentas);
  toonBoodschappen();
}