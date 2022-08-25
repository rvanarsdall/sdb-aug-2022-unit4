const queryString = window.location.search;
console.log(queryString);

let urlParams = new URLSearchParams(queryString);

let firstName = urlParams.get("firstname");
console.log(firstName);

let greeting = document.getElementById("greeting");

let product = urlParams.get("product");
greeting.innerText = `Hello ${firstName}, did you order ${product}`;

console.log(myName);
