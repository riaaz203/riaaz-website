const questions = [
  {
    question: "Ben jij het mooiste wat mij ooit is overkomen? 😍",
    yes: "Ja hè? Dat wist ik al 😘"
  },
  {
    question: "Maak jij letterlijk elke dag mooier voor mij? 💖",
    yes: "Dat doe je echt, elke dag weer 💕"
  },
  {
    question: "Ben jij degene bij wie ik het liefst altijd wil zijn? 🥹",
    yes: "Altijd en overal bij jou ❤️"
  },
  {
    question: "Verdien jij alle liefde van de wereld? 🌍💘",
    yes: "Meer dan alle liefde zelfs 💞"
  },
  {
    question: "Wil ik nog heel veel mooie herinneringen met jou maken? ✨",
    yes: "Zoveel mogelijk, samen met jou 💗"
  },
  {
    question: "Hou ik ongelofelijk veel van jou? ❤️",
    yes: "Meer dan woorden ooit kunnen uitleggen 💌"
  }
];

let currentQuestion = 0;

const questionEl = document.getElementById("question");
const responseEl = document.getElementById("response");
const nextBtn = document.getElementById("nextBtn");
const noBtn = document.getElementById("noBtn");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const finalMessage = document.getElementById("finalMessage");
const questionBox = document.getElementById("questionBox");

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `Vraag ${Math.min(currentQuestion + 1, questions.length)} van ${questions.length}`;
}

function animateQuestionBox() {
  questionBox.classList.remove("fade-switch");
  void questionBox.offsetWidth;
  questionBox.classList.add("fade-switch");
}

function answerYes() {
  responseEl.textContent = questions[currentQuestion].yes;
  nextBtn.style.display = "inline-block";
  createMiniHearts(10);
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    questionEl.textContent = questions[currentQuestion].question;
    responseEl.textContent = "";
    nextBtn.style.display = "none";
    updateProgress();
    animateQuestionBox();
  } else {
    questionBox.style.display = "none";
    document.querySelector(".progress-wrap").style.display = "none";
    finalMessage.classList.remove("hidden");
    createMiniHearts(24);
  }
}

function showHearts() {
  createMiniHearts(35);
}

function createMiniHearts(amount) {
  const hearts = ["💖", "💕", "💗", "💘", "💞"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "pop-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${55 + Math.random() * 30}vh`;
    heart.style.animationDelay = `${Math.random() * 0.3}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2200);
  }
}

function moveNoButton() {
  const x = Math.random() * 140 - 70;
  const y = Math.random() * 70 - 35;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("click", () => {
  responseEl.textContent = "Nee telt niet hoor 😜 Jij bent perfect 💕";
  createMiniHearts(6);
});

function calculateDaysTogether() {
  const startDate = new Date("2024-10-05T00:00:00");
  const now = new Date();
  const diff = now - startDate;

  const totalHours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;

  document.getElementById("daysTogether").textContent = `${days} dagen samen 💞`;
  document.getElementById("extraTime").textContent = `${hours} uur extra liefde ✨`;
}

updateProgress();
calculateDaysTogether();
setInterval(calculateDaysTogether, 60000);
