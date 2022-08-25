async function asyncChuckFetch() {
  try {
    let url = "https://api.chucknorris.io/jokes/random";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.value);
    displayJoke(data.value);
    displayHistory(data.value);
  } catch (err) {
    console.error(err);
  }
}

asyncChuckFetch();

function displayJoke(joke) {
  let randomJokeParaTag = document.getElementById("random-joke");

  randomJokeParaTag.innerText = joke;
}
// 1. grab the parent and store it in a variable
// 2. create a new element on the parent
// 3. replace the innerText of the new element
// 4. append the child to the parent
function displayHistory(joke) {
  let historyList = document.getElementById("history");

  let currentJokeList = document.createElement("li");

  currentJokeList.innerText = joke;

  historyList.append(currentJokeList);
}

function chuckFetch() {
  let url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.value);
    })
    .catch((err) => console.error(err));
}
