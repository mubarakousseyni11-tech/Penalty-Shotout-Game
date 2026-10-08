let score = 0;

function shoot(direction) {
    const choices = ["left", "center", "right"];
    const keeper = choices[Math.floor(Math.random() * 3)];

    const result = document.getElementById("result");
    const scoreDisplay = document.getElementById("score");

    if (direction === keeper) {
        result.textContent = "🧤 Saved!";
    } else {
        score++;
        result.textContent = "⚽ GOAL!";
        scoreDisplay.textContent = score;
    }
}