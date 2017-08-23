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
  alert("Next Players Turn, your current score is: " + this.rollTotal);
}

$(document).ready(function() {
  $("form#prompt").submit(function(event) {
    event.preventDefault();
    player1Input = $ ("input#newPlayer1").val();
    player2Input = $ ("input#newPlayer2").val();

    if (player1Input === "" || player2Input === "") {
      alert("Please Enter a Name")
      return;
    } else {
      $(".game").show(800);
      $("span#p1").append(player1Input);
      $("span#p2").append(player2Input);
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
