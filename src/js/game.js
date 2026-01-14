async function checkCollision() {
    while (!gameEnded) {
        if(isSamePosition(pawnPosition, bonusPosition)) {
            gameEnded = true;
            endGame();
            break;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

function endGame() {
    stopBonusMovement();
    document.onkeydown = null;
    pawn.remove();
    bonus.remove()
    let congratulationPawn = new Image(congratulationPawnSize[0], congratulationPawnSize[1]);
    congratulationPawn.src = congratulationPawnSrc;
    let congratulationPawnGridCell = grid.rows[congratulationPawnPosition[0]].cells[congratulationPawnPosition[1]];
    congratulationPawnGridCell.appendChild(congratulationPawn);
}