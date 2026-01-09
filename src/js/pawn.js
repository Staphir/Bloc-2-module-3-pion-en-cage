function initPawn() {
    let pawn = new Image(pawnSize[0], pawnSize[1]);
    pawn.src = pawnSrc;

    let pawPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)]
    let pawnGridCell = grid.rows[pawPosition[0]].cells[pawPosition[1]];
    pawnGridCell.appendChild(pawn);

    initPawnMovement(pawPosition);

    return pawn;
}

function initPawnMovement(pawnPosition) {
    document.onkeydown = function (e) {
        switch (e.key) {
            case "ArrowUp":
                pawnPosition = [Math.max(pawnPosition[0] - 1, 0), pawnPosition[1]];
                moveElement(grid, pawn, pawnPosition);
                break;
            case "ArrowDown":
                pawnPosition = [Math.min(pawnPosition[0] + 1, gridSize[0] - 1), pawnPosition[1]];
                moveElement(grid, pawn, pawnPosition);
                break;
            case "ArrowLeft":
                pawnPosition = [pawnPosition[0], Math.max(pawnPosition[1] - 1, 0)];
                moveElement(grid, pawn, pawnPosition);
                break;
            case "ArrowRight":
                pawnPosition = [pawnPosition[0], Math.min(pawnPosition[1] + 1, gridSize[1] - 1)];
                moveElement(grid, pawn, pawnPosition);
                break;
            default:
                break;
        }
    };
}