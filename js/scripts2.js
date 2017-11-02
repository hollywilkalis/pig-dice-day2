//business logic
function gamePlay(somethings) {
  roundScoresP1 = singleTurn;

}

var roundScoresP1 = [];
var roundScoresP2 = [];

function Player(name) {
  this.playerName = playerName;
  this.turnScore = turnScore
  this.totalScore;
  this.setTotalScore();
}

Player.prototype.setTotalScore = function(roll1, roll2) {

}


function diceRoll(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var pigDice = diceRoll(1, 6);
alert(pigDice);

var diceRolls123 = [];

var turnTurn = function singleTurn() {
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
  return diceRolls123;
}


//user interface logic

$(document).ready(function() {
  $("#player1Roll").click(function(event) {
  event.preventDefault();
  function diceRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var pigDice = diceRoll(1, 6);
  alert(pigDice);

  var diceRolls123 = [];

  var playPlayPlay = function () {if (diceRolls123.length <=1) {
    if ((pigDice === 1) && (diceRolls123.length = 0)) {
        diceRolls123.push(0,0);
      } else if ((pigDice === 1) && (diceRolls123.length = 1)) {
        diceRolls123.shift();
        diceRolls123.push(0,0);
      } else if (diceRolls123.length <=1) {
        diceRolls123.push(pigDice);
      }
    };
  alert("array" + diceRolls123);
    }
  });//close player2Roll click function
});//close document ready function
