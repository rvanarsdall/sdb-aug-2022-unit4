async function asyncRick() {
  try {
    let url = "https://rickandmortyapi.com/api/character";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.results[0]);
    let characterList = data.results;

    characterList.forEach((character) =>
      displayCharacterInformation(character)
    );

    // displayCharacterInformation(data.results[3]);
  } catch (error) {
    console.error(error);
  }
}

function displayCharacterInformation(character) {
  // 1. find the parent
  // 2. create a list item
  // 3 change the inner text to name
  // 4. apped to parent
  // debugger;

  let { name, status } = character;
  let characters = document.getElementById("characters");

  let characterListItem = document.createElement("li");

  characterListItem.innerText = `${name} - Current Status: ${status}`;

  characters.appendChild(characterListItem);
  //! Bonus: see if you can use object destructuring in order to access the name of the character
  //! Bonus: see if you can get a rando character
}

asyncRick();
