let form = document.getElementsByTagName("form")[0];
let userInput = document.getElementById("user-input");

let computerResponse = document.querySelector("#computer-response");
console.log(form);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let name = userInput.value;
  let badguys = ["adolf hitler", "binladen", "joker"];
  isMatchFound = badguys.includes(name);
  debugger;

  if (isMatchFound === true) {
    // SAY GO AWAY!!!
    computerResponse.innerText = "GO AWAY!!!!";
  } else {
    // Greet the user
    // computerResponse.innerText = `Greetings ${name}!!!!!,`;
    document.location = `/greeting.html?name=${name}`;
  }
}

function refactoredHandleSubmit(event) {
  event.preventDefault();
  if (["adolf hitler", "binladen", "joker"].includes())
    return (computerResponse.innerText = "GO AWAY!!!!");

  return (computerResponse.innerText = `Greetings ${userInput.value}!!!!!,`);
}
