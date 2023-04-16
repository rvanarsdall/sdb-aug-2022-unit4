let myName = "Rob";

let pageLink = document.getElementById("page2-link");

pageLink.href = "./page2.html?firstname=Brad&product=butter";

function gotoNextPage() {
  let productInput = document.getElementById("product").value;
  window.location.href = `./page2.html?firstname=Brad&product=${productInput}`;
}
