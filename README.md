# Number Sweeper

## Project Overview

Number Sweeper is a browser-based puzzle game developed using **HTML, CSS, and JavaScript**.
The objective of this project is to practice core front-end development concepts such as:

* DOM manipulation
* Event handling
* Algorithm implementation
* LocalStorage usage
* Modular JavaScript structure

The game generates a 10 × 10 grid containing numbers from **1 to 100** in random order. The player must avoid selecting prime numbers while strategically clearing the board.

---

# Learning Objectives

This project was created to understand:

• JavaScript game logic
• Prime number algorithms
• Dynamic HTML generation
• Browser storage mechanisms
• Basic software architecture in frontend projects

---

# Game Rules

1. The grid contains numbers from **1 to 100** randomly arranged.
2. Clicking a **prime number** results in **Game Over**.
3. Clicking a **non-prime number**:

   * increases the score
   * disables all multiples of that number.
4. Disabled cells cannot be clicked again.
5. Clicking **1** completes the game and records the score.

---

# System Architecture

The application is divided into small modules to improve readability and maintainability.

```
Application
│
├── index.html
├── leaderboard.html
│
├── css
│   └── style.css
│
├── js
│   ├── main.js
│   ├── game.js
│   ├── ranking.js
│   ├── leaderboard.js
│   └── utils
│       └── math.js
│
└── assets
    └── audio
        └── gameOverSound.mp3
```

---

# Module Responsibilities

main.js
Initialises the game and handles player input.

game.js
Creates the grid, manages gameplay rules, and updates the UI.

ranking.js
Processes player scores and stores leaderboard data.

leaderboard.js
Displays leaderboard results on a separate page.

math.js
Contains reusable functions such as prime number checking.

---

# Data Model

Player Score

```
{
  name: string,
  attempts: number
}
```

Grouped Ranking

```
{
  attempts: number,
  players: string[]
}
```

Example

```
[
  { attempts: 1, players: ["Alice", "John"] },
  { attempts: 4, players: ["Sara"] }
]
```

---

# Algorithms Used

Prime Number Check
The algorithm checks divisibility up to √n to determine whether a number is prime.

Time Complexity: **O(√n)**

Array Shuffle
A shuffle algorithm is used to randomize numbers in the grid.

Ranking Algorithm
Scores are sorted and grouped by the number of attempts.

---

# Storage

Player scores are stored in **LocalStorage** so that results remain available even after refreshing the page.

Storage Key

```
leaderBoard
```

---

# How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Run the file:

```
index.html
```

No additional installation or server setup is required.

---

# Possible Improvements

• Timer-based scoring system
• Improved UI styling
• Animation effects
• Backend database for leaderboard
• Mobile responsive layout

---

# Author

Khalid Ahmed Khan


