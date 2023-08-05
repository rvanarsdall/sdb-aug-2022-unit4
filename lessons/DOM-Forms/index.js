// Get a reference to the form element
const form = document.getElementById("myForm");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from actually submitting

  // Create a new FormData object using the form element
  const formData = new FormData(form);

  // Log the FormData object to the console
  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
});
