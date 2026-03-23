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

function updateProgress() {
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = percent + "%";
  progressText.textContent = `Vraag ${Math.min(currentQuestion + 1, questions.length)} van ${questions.length}`;
}

function answerYes() {
  responseEl.textContent = questions[currentQuestion].yes;
  nextBtn.style.display = "inline-block";
  createMiniHearts(8);
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    questionEl.textContent = questions[currentQuestion].question;
    responseEl.textContent = "";
    nextBtn.style.display = "none";
    updateProgress();
  } else {
    document.querySelector(".question-box").style.display = "none";
    document.querySelector(".progress-wrap").style.display = "none";
    finalMessage.classList.remove("hidden");
    createMiniHearts(20);
  }
}

function showHearts() {
  createMiniHearts(30);
}

function createMiniHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");
    heart.className = "pop-heart";
    heart.textContent = ["💖", "💕", "💗", "💘", "💞"][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = 60 + Math.random() * 25 + "vh";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  responseEl.textContent = "Nee telt niet hoor 😜 Jij bent perfect 💕";
  createMiniHearts(5);
});

function calculateDaysTogether() {
  const startDate = new Date("2024-01-01");
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent =
    `Jullie zijn al ${days} dagen samen 💞`;
}

updateProgress();
calculateDaysTogether();
