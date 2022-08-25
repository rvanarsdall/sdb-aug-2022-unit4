let player1 = 1;
let player2 = 2;
let dice1SpanTag = document.querySelector("#dice1");
let dice2SpanTag = document.querySelector("#dice2");
let displayText = document.getElementById("display-text");

start();

function start() {
  dice1SpanTag.innerText = player1;
  dice2SpanTag.innerText = player2;

  if (player1 > player2) displayText.innerText = "Player 1 wins";
  else if (player1 < player2) {
    displayText.innerText = "Player 2 wins";
  } else {
    displayText.innerText = "Tie";
  }
}
