
var boodschappentas = [];

function gaBoodschappenDoen(){
  var item = document.getElementById("boodschapitem").value;
  boodschappentas.push(item);
  console.log(boodschappentas);
  toonBoodschappen();
}

function toonBoodschappen(){
  var htmlString = "";
  for (var x = 0; x < boodschappentas.length; x++) {
    htmlString += boodschappentas[x] + "<br>";
  }

  var deLijst = document.getElementById("lijst");
  deLijst.innerHTML = htmlString;
}