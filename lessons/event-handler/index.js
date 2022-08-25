console.log("It worked!");

let firstNameInput = document.getElementById("first-name");
console.log(firstNameInput);

let buttonGroup = document.getElementsByTagName("button");

let form = document.querySelector("form");
console.log(buttonGroup);

firstNameInput.addEventListener("keyup", firstNameInputValidation);

form.addEventListener("submit", submitForm);

buttonGroup[0].addEventListener("click", (e) => alert("Button was clicked"));

function submitForm(event) {
  event.preventDefault();
}

function firstNameInputValidation(event) {
  // console.log(event.target.value);
  if (event.target.value === "") {
    buttonGroup[0].disabled = true;
    console.log("button should be disabled");
  } else {
    buttonGroup[0].disabled = false;

    console.log("button should be enabled");
  }
}
