window.addEventListener("load", init);

// Global Variables
let time = 5,
  score = 0,
  isPlaying;

// DOM Elements
const wordInput = document.querySelector("#word-input"),
  currentWord = document.querySelector("#current-word"),
  scoreDisplay = document.querySelector("#score"),
  timeDisplay = document.querySelector("#time"),
  message = document.querySelector("#message"),
  seconds = document.querySelector("#seconds");

// Words Array
const words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runaway",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "definition",
];

// Initialize Game
function init() {
  // Load word from array
  showWord(words);
  // Call countdown every second
  setInterval(countdown, 1000);
}

// Pick and show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown Timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  // Show time
  timeDisplay.innerHTML = time;
}
