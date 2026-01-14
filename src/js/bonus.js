function initBonus() {
    let bonus = new Image(bonusSize[0], bonusSize[1]);
    bonus.src = bonusSrc;

    do {
        bonusPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)];
    }
    while (checkCollisions(pawnPosition, bonusPosition))
    let bonusGridCell = grid.rows[bonusPosition[0]].cells[bonusPosition[1]];
    bonusGridCell.appendChild(bonus);

    return bonus;
}


function bonusMovement(bonus) {
        do {
            bonusPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)];
        }
        while (checkCollisions(pawnPosition, bonusPosition))
        moveElement(grid, bonus, bonusPosition);
}
