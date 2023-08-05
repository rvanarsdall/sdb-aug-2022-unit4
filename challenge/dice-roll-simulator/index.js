let player1 = 1;
let player2 = 2;
let dice1SpanTag = document.querySelector("#dice1");
let dice2SpanTag = document.querySelector("#dice2");
let message = document.getElementById("display-text");
rollDice();

function displayGame() {
  dice1SpanTag.innerText = player1;
  dice2SpanTag.innerText = player2;

  if (player1 > player2) message.innerText = "Player 1 wins";
  else if (player1 < player2) {
    message.innerText = "Player 2 wins";
  } else {
    message.innerText = "Tie";
  }
}

function rollDice() {
  player1 = Math.floor(Math.random() * 6) + 1;
  player2 = Math.floor(Math.random() * 6) + 1;
  displayGame();
}
