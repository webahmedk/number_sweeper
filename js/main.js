//main.js

import { startGame } from "./game.js";

const name = prompt("Enter your name");

document.getElementById("name").textContent = name;

startGame(name);