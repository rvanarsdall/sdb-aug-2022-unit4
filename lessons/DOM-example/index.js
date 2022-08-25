console.log("Hello from Index.js");

let header = document.getElementById("header");
console.log(header);

// header.innerText = "Hello World";
// ? Can you add HTML to the innerText?
// header.innerText = "Hello <em>World</em>"; // NOT THE WAY TO DO IT

header.innerHTML = "Hello <em>World</em>";
header.style.color = "blue";
header.style.fontSize = "150%";

const errorLists = document.getElementsByClassName("error-list");

console.log(errorLists);

// ? First bullet point change text to: First Error has Changed
errorLists[0].innerText = "First Error has Changed";
// ? Second bullet point to be RED
errorLists[0].style.color = "red";
errorLists[1].style.color = "red";

// ? Loop through the classnames
for (let i = 0; i < errorLists.length; i++) {
  errorLists[i].style.color = "purple";
}
// ? Loop through doing a For of....

for (error of errorLists) {
  error.style.color = "blue";
}

// ! For Each can not be used on HTML Collections

// errorLists.forEach((error) => (error.style.color = "brown"));

let pTag = document.getElementsByTagName("p");

console.log(pTag);

let listTag = document.getElementsByTagName("li");

console.log(listTag);

listTag[0].style.fontStyle = "italic";

// QuerySelector stops at the first one on the page
let querySelectorHeader = document.querySelector("h1");
console.log(querySelectorHeader);
// ID's use the # in the querySelector parameter
let querySelectorParagraphId = document.querySelector("#para");
console.log(querySelectorParagraphId);
// Classes use . in the querySelector parameter
let querySelectorClass = document.querySelector(".error-list");
console.log(querySelectorClass);

let querySelectorAllClass = document.querySelectorAll(".error-list");

console.log(querySelectorAllClass);

// Alerts
// alert("Password not matched");

// Prompts
// let appleCount = prompt("How many apples?");
// console.log(appleCount);
// Confirms
// confirm("Would you like to proceed?");
