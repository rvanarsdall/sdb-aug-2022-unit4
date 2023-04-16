let inputItem = document.getElementById("input-item");
let addItemBtn = document.getElementById("add-item");

addItemBtn.addEventListener("click", handleAdd);
inputItem.addEventListener("keyup", handleChange);
function handleAdd() {
  console.log(inputItem.value);
}

function handleChange(e) {
  console.log(e.target.value);
}
