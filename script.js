const board = document.getElementById("board");
const statusText = document.getElementById("status-text");
const resetBtn = document.getElementById("reset-btn");
const pvpBtn = document.getElementById("pvp");
const pvcBtn = document.getElementById("pvc");

let currentPlayer = "X";
let gameActive = false;
let gameMode = null;
let cells = Array(9).fill("");

const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function startGame(mode) {
  gameMode = mode;
  gameActive = true;
  currentPlayer = "X";
  cells = Array(9).fill("");
  board.innerHTML = "";
  statusText.textContent = `${currentPlayer}'s Turn`;

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.addEventListener("click", handleClick);
    board.appendChild(cell);
  }
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (!gameActive || cells[index] !== "") return;

  makeMove(index);

  if (gameMode === "pvc" && gameActive && currentPlayer === "O") {
    setTimeout(aiMove, 400);
  }
}

function makeMove(index) {
  cells[index] = currentPlayer;
  document.querySelectorAll(".cell")[index].textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `${currentPlayer} Wins!`;
    highlightWinner();
    gameActive = false;
    return;
  }

  if (cells.every(cell => cell !== "")) {
    statusText.textContent = "It's a Draw!";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `${currentPlayer}'s Turn`;
}

function checkWinner() {
  return WINNING_COMBOS.some(combo => {
    const [a, b, c] = combo;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function highlightWinner() {
  WINNING_COMBOS.forEach(combo => {
    const [a, b, c] = combo;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      document.querySelectorAll(".cell")[a].classList.add("winner");
      document.querySelectorAll(".cell")[b].classList.add("winner");
      document.querySelectorAll(".cell")[c].classList.add("winner");
    }
  });
}

function aiMove() {
  // Simple AI: Win, block, or random
  let move = findBestMove("O") || findBestMove("X") || findEmptyCell();
  makeMove(move);
}

function findBestMove(player) {
  for (let combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    const values = [cells[a], cells[b], cells[c]];
    if (values.filter(v => v === player).length === 2 && values.includes("")) {
      return combo[values.indexOf("")];
    }
  }
  return null;
}

function findEmptyCell() {
  const empty = cells.map((v, i) => (v === "" ? i : null)).filter(v => v !== null);
  return empty[Math.floor(Math.random() * empty.length)];
}

// Keyboard controls (1-9)
document.addEventListener("keydown", e => {
  const key = parseInt(e.key);
  if (key >= 1 && key <= 9) {
    const index = key - 1;
    if (gameActive && cells[index] === "") {
      makeMove(index);
      if (gameMode === "pvc" && gameActive && currentPlayer === "O") {
        setTimeout(aiMove, 400);
      }
    }
  }
});

resetBtn.addEventListener("click", () => {
  if (gameMode) startGame(gameMode);
  else statusText.textContent = "Choose Mode to Start";
});

pvpBtn.addEventListener("click", () => startGame("pvp"));
pvcBtn.addEventListener("click", () => startGame("pvc"));
