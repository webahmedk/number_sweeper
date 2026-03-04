// ranking.js
export function saveScore(scoreObj) {
    let board = JSON.parse(localStorage.getItem("leaderBoard")) || [];

    // Optional: prevent adding exactly the same entry multiple times
    // (in case someone refreshes right after winning)
    const alreadyExists = board.some(
        s => s.name === scoreObj.name && s.attempts === scoreObj.attempts
    );
    if (alreadyExists) return;

    board.push(scoreObj);

    // sort: fewer attempts = better, then alphabetical name on tie
    board.sort((a, b) => {
        if (a.attempts !== b.attempts) return a.attempts - b.attempts;
        return a.name.localeCompare(b.name);
    });

    localStorage.setItem("leaderBoard", JSON.stringify(board));
}

export function getRanking() {
    const board = JSON.parse(localStorage.getItem("leaderBoard")) || [];

    const groups = {};

    board.forEach(player => {
        const key = player.attempts;
        if (!groups[key]) groups[key] = [];
        groups[key].push(player.name);
    });

    return Object.keys(groups)
        .map(Number)
        .sort((a, b) => a - b)           // lowest attempts first
        .map(attempts => ({
            attempts,
            players: groups[attempts]
        }));
}