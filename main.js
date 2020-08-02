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
}
