// First need to grab the PARENT ELEMENT
let visitedPlaces = document.getElementById("visited-places");

// Second in JS say what element we need to create

let place = document.createElement("li");

// Third - what do we want to put insied of the element we created
// ex: innerText, textContent, innerHTML

place.innerText = "Germany";

// Fourth - we need to "append" this to the parent

visitedPlaces.appendChild(place);

let locations = ["Germany", "Korea", "Scary Berry", "NYC"];

locations.forEach((location) => {
  console.log(location);
  let place = document.createElement("li");
  place.innerText = location;

  visitedPlaces.appendChild(place);
});
let visitedPlacesChildren = visitedPlaces.childNodes.length;
function clearList() {
  for (let i = 0; i < visitedPlacesChildren; i++) {
    visitedPlaces.removeChild(visitedPlaces.firstChild);
  }
}
