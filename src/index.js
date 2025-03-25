function displayEmail(response) {
  console.log("email generated");
  new Typewriter("#email", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateEmail(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "179d18a7b4e4aebt8ff9c850b9e3060o";

  let context =
    "You are a professional mail writer and love to write Emails. Your mission is a 6 line Email in basic HTML. Make sure to follow the user instruction below";
  let prompt = ` User instructions: Generate an Email about ${instructionInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayEmail);
  console.log("generating email");
}

let emailFormElement = document.querySelector("#email-generator");
emailFormElement.addEventListener("submit", generateEmail);
