
var turnValue = [];
//
function Player(name, roundScore) {
  this.name = name
  this.calculateScore(); //grabs the score for a single roundScore
  this.totalScore;
  // this.calculateTotalScore();
}

function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} //random number generator for the die roll

var diceRolls123 = [];

Player.prototype.calculateScore = function() {
  var roundScore = turnValue.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return roundScore;
} //takes array from singleTurn, converts it to a single value

function singleTurn() {
  var pigDice = diceRoll(1, 6);
  if (diceRolls123.length <=1) {
  if ((pigDice === 1) && (diceRolls123.length = 0)) {
      diceRolls123.push(0,0);
    } else if ((pigDice === 1) && (diceRolls123.length = 1)) {
      diceRolls123.shift();
      diceRolls123.push(0,0);
    } else if (diceRolls123.length <=1) {
      diceRolls123.push(pigDice);
    }
  };
  return diceRolls123; //array containing both roll scores
}


//user interface logic

$(document).ready(function() {
  var player1input;
  var player2input;
  var player1 = new Player (player1input, 0);
  var player2 = new Player (player2input, 0);

  $("#startgame").click(function(event) {
    event.preventDefault();
    player1input = $("#player1name").val();
    player2input = $("#player2name").val();



    $(".player1name").text(player1input);
    $(".player2name").text(player2input);
  });

  $("#player1Roll").click(function(event) {
  event.preventDefault();
  turnValue = singleTurn();
  var player1round = player1.calculateScore(turnValue);
  console.log("player1round " + player1round);
  console.log("turnValue " + turnValue);
  });

});//close document ready function
