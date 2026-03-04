// game.js
import { isPrime } from "./utils/math.js";
import { saveScore } from "./ranking.js";

let score = 0;

const audio = new Audio("../assets/audio/gameOverSound.mp3");

export function startGame(playerName) {
    document.getElementById("name").textContent = playerName || "Guest";

    const table = document.getElementById("board");

    const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
    shuffle(numbers);

    let index = 0;
    for (let r = 0; r < 10; r++) {
        const tr = document.createElement("tr");
        for (let c = 0; c < 10; c++) {
            const td = document.createElement("td");
            const value = numbers[index++];
            td.textContent = value;
            td.dataset.value = value;
            td.addEventListener("click", () => handleClick(value, td, playerName));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

function handleClick(value, cell, playerName) {
    if (cell.classList.contains("disabled")) return;

    if (isPrime(value)) {
        audio.currentTime = 0;
        audio.play().catch(() => {}); // prevent console error if blocked
        alert("Game Over — you hit a prime number!");
        location.reload();
        return;
    }

    score++;
    document.getElementById("score").textContent = score;

    disableMultiples(value);

    // Win condition
    if (value === 1) {
        setTimeout(() => {
            alert(`You win, ${playerName}! 🎉\nAttempts: ${score}`);
            saveScore({ name: playerName, attempts: score });
            location.href = "leader_board.html";
        }, 300);
    }
}

function disableMultiples(n) {
    for (let i = n; i <= 100; i += n) {
        const el = document.querySelector(`[data-value='${i}']`);
        if (el) el.classList.add("disabled");
    }
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}