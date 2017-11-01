//business logic
var pigDice = diceRoll(1, 6);

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//user interface logic
$(document).ready(function() {
  $("#playerRoll").click(function(event) {
  event.preventDefault();


  $(".die-display").append(pigDice);
  });
});



















// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//
// var pigDice = getRandomIntInclusive(1, 6);
// alert(pigDice);
