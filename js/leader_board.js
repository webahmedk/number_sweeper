// leaderboard.js
import { getRanking } from "./ranking.js";

const container = document.getElementById("leader_board");

const rankings = getRanking();

if (rankings.length === 0) {
    container.innerHTML = "<p>No scores yet. Be the first one!</p>";
    // removed the illegal return statement
} else {
    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th>Rank</th>
                <th>Attempts</th>
                <th>Players</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");

    let currentRank = 1;

    for (const entry of rankings) {
        const row = document.createElement("tr");

        // optional: style top 3 differently
        if (currentRank === 1) row.className = "gold";
        else if (currentRank === 2) row.className = "silver";
        else if (currentRank === 3) row.className = "bronze";

        row.innerHTML = `
            <td>${currentRank}</td>
            <td>${entry.attempts}</td>
            <td>${entry.players.join(", ")}</td>
        `;

        tbody.appendChild(row);

        // Important: increase rank by number of players who share this score
        currentRank += entry.players.length;
    }

    container.appendChild(table);
}