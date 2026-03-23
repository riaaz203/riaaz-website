const questions = [
  "Ben jij de mooiste persoon ooit? 😍",
  "Maak jij mijn leven beter? 💖",
  "Hou ik super veel van jou? 🥰",
  "Wil ik altijd bij jou zijn? 💕",
  "Ben jij mijn alles? ❤️"
];

let index = 0;

function answerYes() {
  document.getElementById("response").textContent =
    "Zie je wel 😘 Ik wist het!";
  document.getElementById("nextBtn").style.display = "inline-block";
}

function answerNo() {
  document.getElementById("response").textContent =
    "Fout antwoord 😤 Probeer opnieuw 😏💕";
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    document.getElementById("question").textContent = questions[index];
    document.getElementById("response").textContent = "";
  } else {
    document.getElementById("question").textContent =
      "Laatste vraag... 💖";
    document.getElementById("response").textContent =
      "Ik hou echt super veel van jou ❤️";
    document.getElementById("nextBtn").style.display = "none";
  }
}
