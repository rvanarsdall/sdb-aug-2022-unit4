/* 
Initial setup
*/

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

/* 
Grabbing Elements

*/
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn"); // #3 Roll Button
const resetBtn = document.getElementById("resetBtn");
const infoDiv = document.getElementById("info-div"); // Game rules
const closeBtn = document.getElementById("close-btn"); // #1 Button on the rules
const container = document.getElementById("container"); // Game Container
const showRules = document.getElementById("show-rules"); // #2 Button

/* 
Show and Hide
*/
function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}
function DisplayButton() {
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
}

showRules.addEventListener("click", function () {
  infoDiv.style.display = "block";
  container.style.display = "none";
});

closeBtn.addEventListener("click", function () {
  infoDiv.style.display = "none";
  container.style.display = "block";
});

rollBtn.addEventListener("click", function () {
  // Create a random number from 1-6
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  // Based on players turn...
  /* 
  - apply the random number to the player's score
  - update the scoreboard in the using DOM
  - update the dice number using DOM
  - remove the class of active of the active player since they already rolled the dice
  - apply the active class to the opposite player.
  - update the message to display who's turn it is.
  
  */
  if (player1Turn) {
    player1Score += randomNumber;
    player1Scoreboard.textContent = player1Score;
    player1Dice.textContent = randomNumber;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = "Player 2 Turn";
    player2Dice.textContent = "-";
  } else {
    player2Score += randomNumber;
    player2Scoreboard.textContent = player2Score;
    player2Dice.textContent = randomNumber;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = "Player 1 Turn";
    player1Dice.textContent = "-";
  }
  //  Check if the score is greater than or equal to 20
  /*
   * Display proper message
   * update the button to reset the game
   
   */
  if (player1Score >= 20) {
    message.textContent = "Player 1 has won! 🥳";
    player2Dice.classList.remove("active");

    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = "Player 2 has won! 🎉";
    player1Dice.classList.remove("active");
    showDisplayButton();
  }
  //  Change player's turn
  player1Turn = !player1Turn;
});

resetBtn.addEventListener("click", function () {
  /* 
    -reset player's score
    -set player 1 to be the active roller
    -reset the dice numbers to 0
    
    */
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  player1Dice.textContent = 0;
  player2Dice.textContent = 0;
  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  message.textContent = "Player 1's Turn";
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  DisplayButton();
});
