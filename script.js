
var boodschappentas = [];

function gaBoodschappenDoen(){
  var item = document.getElementById("boodschapitem").value;
  boodschappentas.push(item);
  console.log(boodschappentas);
  toonBoodschappen();
}

function toonBoodschappen(){
  var htmlString = "test";
  for(var x = 0 ; x < boodschappentas.lenght ; x++ ){
    htmlString += boodschappentas[x];
  }
  var deLijst = document.getElementById("lijst");
  deLijst.innerHTML = htmlString;
}