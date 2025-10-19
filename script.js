function validateForm() {
  const name = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const message = document.forms["contactForm"]["message"].value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill out all fields before submitting.");
    return false;
  }

  alert("Thank you for contacting Fashion 'N' Joy!");
  return true;
}
