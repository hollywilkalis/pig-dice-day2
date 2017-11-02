
var turnValue = [];
var totalValue = [];
var bigScore = [];
//
function Player(name, roundScore, turnValue) {
  this.name = name
  this.calculateScore(); //grabs the score for a single roundScore
  this.totalScore;
  this.turnValue = turnValue
  this.calculateTotalScore();
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

Player.prototype.calculateTotalScore = function() {
  var totalScore = bigScore.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return totalScore;
} //takes array from all Turns, converts it to a single value

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
    turnValue = singleTurn(); //dice roll
    if (turnValue.length >=2) {
      alert("player 1, your time is over");
      };
    var player1round = player1.calculateScore(turnValue);
          console.log("player1round " + player1round);
          console.log("turnValue " + turnValue);

    // var player1total = player1.calculateTotalScore();
    //       console.log("player1total " + player1total);

    bigScore.push(turnValue.splice(0,2));
      console.log("BigScore " + bigScore);
    var player1total = player1.calculateTotalScore(bigScore);
      console.log("player1total " + player1total);

  });//end of player 1 click time

$("#player2Roll").click(function(event) {
  event.preventDefault();
  turnValue = singleTurn();
  var player2round = player2.calculateScore(turnValue);
        console.log("player2round " + player2round);
        console.log("turnValue " + turnValue);
  var player2total = player2.calculateTotalScore();
        console.log("player2total " + player2total);
  if (turnValue.length >=2) {
    alert("player 2, your time is over");
    bigScore = totalValue.push(turnValue);
    var playerYes = player2.calculateTotalScore(bigScore);
    turnValue.splice(0,2);
        console.log("pyes " + playerYes);
  }
  });//end of player 2 click time

});//close document ready function
