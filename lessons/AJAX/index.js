const ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://api.chucknorris.io/jokes/random");
ourRequest.onload = function () {
  let data = JSON.parse(ourRequest.responseText);
  console.log(data);
};
ourRequest.send();
