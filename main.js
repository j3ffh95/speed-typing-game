window.addEventListener("load", init);

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To change level
const currentLevel = levels.easy;

// Global Variables
let time = currentLevel,
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
  // Show number of seconds in ui
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // CHeck game status
  setInterval(checkStatus, 50);
}

// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // If score is -1 then display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
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

// Check Game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over!!!";
    score = -1;
  }
}
