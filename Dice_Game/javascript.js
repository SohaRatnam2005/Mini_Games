function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let randomnumber1 = getRandomInt(1, 7);
let randomnumber2 = getRandomInt(1, 7);


var randomimage1 = "images/dice" + randomnumber1 + ".png";
var randomimage2 = "images/dice" + randomnumber2 + ".png";


document.querySelectorAll("img")[0].setAttribute("src", randomimage1 );
document.querySelectorAll("img")[1].setAttribute("src", randomimage2 );


if(randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = " player 1 wins " ;

}
else if (randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML = " player 2 wins " ;
}
else  {
  document.querySelector("h1").innerHTML = " DRAW " ;
}

