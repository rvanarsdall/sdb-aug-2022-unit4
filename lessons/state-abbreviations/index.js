const stateLabelValues = [
  { label: "Alabama", value: "AL" },
  { label: "Alaska", value: "AK" },
  { label: "American Samoa", value: "AS" },
  { label: "Arizona", value: "AZ" },
  { label: "Arkansas", value: "AR" },
  { label: "California", value: "CA" },
  { label: "Colorado", value: "CO" },
  { label: "Connecticut", value: "CT" },
  { label: "Delaware", value: "DE" },
  { label: "District of Columbia", value: "DC" },
  { label: "States of Micronesia", value: "FM" },
  { label: "Florida", value: "FL" },
  { label: "Georgia", value: "GA" },
  { label: "Guam", value: "GU" },
  { label: "Hawaii", value: "HI" },
  { label: "Idaho", value: "ID" },
  { label: "Illinois", value: "IL" },
  { label: "Indiana", value: "IN" },
  { label: "Iowa", value: "IA" },
  { label: "Kansas", value: "KS" },
  { label: "Kentucky", value: "KY" },
  { label: "Louisiana", value: "LA" },
  { label: "Maine", value: "ME" },
  { label: "Marshall Islands", value: "MH" },
  { label: "Maryland", value: "MD" },
  { label: "Massachusetts", value: "MA" },
  { label: "Michigan", value: "MI" },
  { label: "Minnesota", value: "MN" },
  { label: "Mississippi", value: "MS" },
  { label: "Missouri", value: "MO" },
  { label: "Montana", value: "MT" },
  { label: "Nebraska", value: "NE" },
  { label: "Nevada", value: "NV" },
  { label: "New Hampshire", value: "NH" },
  { label: "New Jersey", value: "NJ" },
  { label: "New Mexico", value: "NM" },
  { label: "New York", value: "NY" },
  { label: "North Carolina", value: "NC" },
  { label: "North Dakota", value: "ND" },
  { label: "Northern Mariana Islands", value: "MP" },
  { label: "Ohio", value: "OH" },
  { label: "Oklahoma", value: "OK" },
  { label: "Oregan", value: "OR" },
  { label: "Palau", value: "PW" },
  { label: "Pennsilvania", value: "PA" },
  { label: "Puerto Rico", value: "PR" },
  { label: "Rhode Island", value: "RI" },
  { label: "South Carolina", value: "SC" },
  { label: "South Dakota", value: "SD" },
  { label: "Tennessee", value: "TN" },
  { label: "Texas", value: "TX" },
  { label: "Utah", value: "UT" },
  { label: "Vermont", value: "VT" },
  { label: "Virgin Islands", value: "VI" },
  { label: "Virginia", value: "VA" },
  { label: "Washington", value: "WA" },
  { label: "West Virginia", value: "WV" },
  { label: "Wisconsin", value: "WI" },
  { label: "Wyoming", value: "WY" },
];

let currentState = {
  indexNumber: 0,
  message: "...loading",
};

for (let i = 0; i < stateLabelValues.length; i++) {
  let dropdownList = document.getElementById("abbreviations");
  let optionSet = document.createElement("option");
  optionSet.value = i;
  optionSet.text = stateLabelValues[i].value;
  dropdownList.appendChild(optionSet);
}

function randomState() {
  let randomNum = Math.floor(Math.random() * stateLabelValues.length);
  currentState.indexNumber = randomNum;
  currentState.message = stateLabelValues[randomNum].label;
  displayRandomState();
}

function displayRandomState() {
  let currentStateQuestion = document.getElementById("current-state-question");
  currentStateQuestion.innerText = currentState.message;
}

function validateCorrectAbbreviation(e) {
  e.preventDefault();
  let abbreviationSelection = document.getElementById("abbreviations");
  console.log(abbreviationSelection.value);
  if (
    abbreviationSelection[currentState.indexNumber].label ===
    currentState.message
  ) {
    alert("Correct");
  } else {
    alert("That is incorrect");
  }
}

randomState();
