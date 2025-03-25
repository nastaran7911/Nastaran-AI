function generateEmail(event) {
  event.preventDefault();
  new Typewriter("#email", {
    strings: "The Email will be here",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let emailFormElement = document.querySelector("#email-generator");
emailFormElement.addEventListener("submit", generateEmail);
