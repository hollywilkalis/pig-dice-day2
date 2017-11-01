//business logic



function Player(name, roll, turn, total) {
  this.name = name;
  this.roll = pigDice
  this.turn;
  this.totalScore;
}

// function Turn {
//   this.roll1 = roll1 value
//   this.roll2 = roll2 value
//   var function()- if either roll is a 1, set roll score to 0
//                     else add roll1 + roll2
//
// }

var diceRollsP1 = [];
var diceRollsP2 = [];

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};




//user interface logic

$(document).ready(function() {
  $("#player1Roll").click(function(event) {
  event.preventDefault();
  var pigDice = diceRoll(1, 6);
  if (diceRollsP1.length <=1) {
  diceRollsP1.push(pigDice);
  console.log(diceRollsP1);
} else {
    alert("Your turn is up!");
}
});
});
//   // $(".die-display").append(diceRolls);
//   });
//   $("#player2Roll").click(function(event) {
//   event.preventDefault();
//   var pigDice = diceRoll(1, 6);
//   if (diceRollsP2.length <=1) {
//   diceRollsP2.push(pigDice);
//   console.log(diceRollsP2);
// } else {
//     alert("Your turn is up!");
// }
//   // $(".die-display").append(diceRolls);
//   });
// });









// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
//
// var pigDice = getRandomIntInclusive(1, 6);
// alert(pigDice);
