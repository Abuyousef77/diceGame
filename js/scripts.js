// back-end logic
function Player(player, total, rollTotal) {
  this.player = player
  this.total = total;
  this.rollTotal = rollTotal;
}

function Random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var player1 = new Player("Player1", 0, 0);
var player2 = new Player("Player2", 0, 0);

Player.prototype.roll = function() {
  roll = Random(1,6);
  console.log(roll);
    if (roll === 1) {
      this.total = 0;
      alert("Turn over, Current Score:" + this.rollTotal);
      // $("Player1", "Player2").toggle();
      return this.rollTotal;
    }
    else {
      this.total += roll;
      alert("Turn Score: " + roll);
    }
}

Player.prototype.hold = function() {
  this.rollTotal += this.total;
  this.total = 0;
  alert("Current Score: " + this.rollTotal);
  // $("Player1", "Player2").toggle();
}

$(document).ready(function() {
  $("#roll1").click(function(event) {
    event.preventDefault();
    player1.roll();
    // $("ul#player1score").empty();
    // $('ul#player1score').append(this.total);
  });

  $("#pass1").click(function(event) {
    event.preventDefault();
    player1.hold();
    var score = parseInt(player1.rollTotal)
    $('ul#player1score').append(score);
  });

  $("#roll2").click(function(event) {
    event.preventDefault();
    player2.roll();
  });

  $("#pass2").click(function(event) {
    event.preventDefault();
    player2.hold();
  });
});
