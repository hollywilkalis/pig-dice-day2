
//business logic
var diceRolls = [];

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


//user interface logic
$(document).ready(function() {
  $("#playerRoll").click(function(event) {
  event.preventDefault();
  var pigDice = diceRoll(1, 6);
  if (diceRolls.length <=1) {
  diceRolls.push(pigDice);
  console.log(diceRolls);
} else {
    alert("Your turn is up!");
}
  // $(".die-display").append(diceRolls);
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
