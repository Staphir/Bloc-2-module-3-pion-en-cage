function initBonus() {
    let bonus = new Image(bonusSize[0], bonusSize[1]);
    bonus.src = bonusSrc;

    do {
        bonusPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)];
    }
    while (isSamePosition(pawnPosition, bonusPosition))
    let bonusGridCell = grid.rows[bonusPosition[0]].cells[bonusPosition[1]];
    bonusGridCell.appendChild(bonus);

    return bonus;
}

let bonusMovementRunning = true;

async function initBonusMovement(bonus) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        do {
            bonusPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)];
        }
        while (isSamePosition(pawnPosition, bonusPosition) && bonusMovementRunning)
        moveElement(grid, bonus, bonusPosition);
}

function stopBonusMovement() {
    bonusMovementRunning = false;
}