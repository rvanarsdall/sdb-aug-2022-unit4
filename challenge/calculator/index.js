console.log("it works");

// Create variables to store the input values

let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");
let totalDisplay = document.getElementById("total");
let form = document.querySelector("form");
console.log(totalDisplay);
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  console.log(+input1.value);

  let total = addNumbers(parseInt(input1.value), Number(input2.value));
  //   alert(`The total is: ${total}`);
  totalDisplay.innerText = total.toString();
}

function addNumbers(num1, num2) {
  return num1 + num2;
}
