# README.md

## 🎮 Tic-Tac-Toe Web Application

An interactive and responsive **Tic-Tac-Toe** web app built with **HTML, CSS, and JavaScript**. Play either **Player vs Player** or **Player vs Computer** modes using both **mouse clicks** and **keyboard controls**.

---
## 🔗 Live Website:

[https://nidafazli-nalband.github.io/TicTacToe/]

---

### 🚀 Features
- **Two Game Modes**:
  - Player vs Player (local two-player mode)
  - Player vs Computer (AI opponent)
- **Smart AI Logic**:
  - The computer tries to win, block your move, or play strategically.
- **Dual Controls**:
  - Click on the cells using your mouse
  - Or use keys `1–9` to mark positions (top-left to bottom-right)
- **Responsive Design** — works seamlessly across desktop and mobile.
- **Modern UI** with gradient background, smooth transitions, and hover effects.
- **Reset & Replay** button for quick restarts.
- **Winning Highlight** — visually emphasizes the winning combination.

---

### 🕹️ Controls
| Action | Description |
|--------|--------------|
| Mouse Click | Select a cell manually |
| Number Keys (1–9) | Play using keyboard |
| Reset Button | Restart the game |

> Example mapping:
> - `1` → top-left cell
> - `5` → center cell
> - `9` → bottom-right cell

---

### 🧠 Game Logic Summary
- The board is represented by an array of 9 elements.
- Each click updates the state, checks for a winner, or switches turns.
- The **AI** follows this order:
  1. Win if possible.
  2. Block the opponent if they can win next.
  3. Choose the center if available.
  4. Choose a corner.
  5. Choose any random remaining spot.

---

### 🧩 Tech Stack
- **HTML5** — structure
- **CSS3** — layout, responsiveness, and style
- **Vanilla JavaScript (ES6)** — game logic and interactivity

---

### ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nidafazlinalband-eng/SCT_WD_3.git
   ```

2. Navigate into the project folder:
   ```bash
   cd SCT_WD_3
   ```

3. Open `index.html` in any modern browser.

   ```bash
   start index.html
   ```

No server setup required — it runs purely on the client-side.

---

### 📁 Folder Structure
```
Tic-Tac-Toe/
│
├── index.html      # Main HTML file
├── styles.css      # App styling
├── script.js       # Game logic
└── README.md       # Project description

---

### 🧾 License
This project is open source and free to use.

---

### 👩‍💻 Author
**Nida Fazli Nalband**  
🎓 B.E. Computer Science Engineering  
💼 GitHub: [NidaFazliNalband-eng](https://github.com/NidaFazliNalband-eng)

---

✅ **Next Steps / Suggestions:**
- Add an **unbeatable minimax AI** version.
- Include **score tracking** and **sound effects**.
- Deploy using GitHub Pages for instant online play.

---

**Enjoy the Game! 💜**
