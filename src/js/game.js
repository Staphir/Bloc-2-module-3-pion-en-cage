function checkCollisions(position1, position2) {
    return position1[0] === position2[0] && position1[1] === position2[1];
}

function endGame() {
    document.onkeydown = null;
    pawn.remove();
    bonus.src = congratulationPawnSrc;
    clearInterval(interval)
}

function checkEndGame(pawnPosition, bonusPosition) {
    if (checkCollisions(pawnPosition, bonusPosition)) {
        endGame();
    }
}