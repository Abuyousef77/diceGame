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

var player1 = new Player("", 0, 0);
var player2 = new Player("", 0, 0);


Player.prototype.roll = function() {
  roll = Random(1,6);
  console.log(roll);
    if (roll === 1) {
      this.total = 0;
      alert("You rolled a 1, next players turn! Current Score:" + this.rollTotal);
    }
    else {
      this.total += roll;
      alert("You rolled: " + roll);
    }
}

Player.prototype.hold = function() {
  this.rollTotal += this.total;
  alert("Next Players Turn, score for this round is: " + this.total);
  this.total = 0;
}

$(document).ready(function() {
  $("form#prompt").submit(function(event) {
    event.preventDefault();
    player1.player = $ ("input#newPlayer1").val();
    player2.player = $ ("input#newPlayer2").val();

    if (player1.player === "" || player2.player === "") {
      alert("Please Enter a Name")
      return;
    } else {
      $(".game").show(800);
      $("span#p1").append(player1.player);
      $("span#p2").append(player2.player);
    }
  });

  $("#roll1").click(function(event) {
    player1.roll();
  });

  $("#pass1").click(function(event) {
    player1.hold();
    var score = (player1.rollTotal)
    $('ul#player1score').text(score);
  });

  $("#roll2").click(function(event) {
    player2.roll();
  });

  $("#pass2").click(function(event) {
    player2.hold();
    var score = (player2.rollTotal)
    $('ul#player2score').text(score);
  });
});
