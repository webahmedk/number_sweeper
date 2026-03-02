# Number Sweeper

## Overview

Number Sweeper is a browser-based logic game built using HTML, CSS, and vanilla JavaScript.
The player interacts with a 10 × 10 grid containing the numbers 1–100 in random order.
The objective is to avoid prime numbers while strategically clearing the board.

The game tracks player attempts and stores results in a local leaderboard using the browser's LocalStorage API.


## Game Rules

1. The board contains numbers from **1 to 100** arranged randomly.
2. Clicking a **prime number** immediately ends the game.
3. Clicking a **non-prime number**:

   * increases the score
   * disables all multiples of that number.
4. Disabled cells cannot be clicked again.
5. Clicking **1** successfully completes the game.
6. When the player wins, the score is stored in the leaderboard.


## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Browser LocalStorage


## Project Structure


number-sweeper
│
├── index.html
├── leaderboard.html
├── README.md
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


## How to Run the Project

1. Download or clone the repository.
2. Open the project folder.
3. Open **index.html** in a web browser.

No build tools or installations are required.



## Game Flow

1. Player enters their name.
2. A shuffled 10 × 10 grid is generated.
3. The player selects numbers following the rules.
4. If a prime number is clicked → Game Over.
5. If the player reaches the win condition → score is saved to the leaderboard.



## Example Leaderboard Data

[
  { "name": "John", "attempts": 4 },
  { "name": "Alice", "attempts": 6 }
]


## Possible Improvements

* Add visual feedback for disabled cells
* Display ranking positions
* Improve mobile responsiveness
* Add restart button
* Add difficulty levels

## Author

Khalid Ahmed Khan
