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

  if (isNaN(input1.value) || isNaN(input2.value)) {
    return alert("Can not calculate: validate you have numbers submitted");
  }

  let total = parseInt(input1.value) + Number(input2.value);
  //   alert(`The total is: ${total}`);
  totalDisplay.innerText = total.toString();
}
