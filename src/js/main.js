"use strict"

let gridSize = [8, 8];

//create grid
let grid = document.createElement('table')
grid.style.border = "1px solid black";

for (let i = 0; i < gridSize[0]; i++) {
    let row = grid.insertRow();
    for (let j = 0; j < gridSize[1]; j++) {
        let cell = row.insertCell();
        cell.style.width = "50px";
        cell.style.height = "50px";
        cell.style.border = "1px solid black";
    }
}
document.body.appendChild(grid);

//create pawn
let pawn = new Image(50, 50);
pawn.src = "https://maxime-dulieu.fr/assets/logosCompetences/javascript.jpg";

//pos pawn
let pawPosition = [getRandomIntInclusive(0, gridSize[0] - 1), getRandomIntInclusive(0, gridSize[1] - 1)]
let pawnGridCell = grid.rows[pawPosition[0]].cells[pawPosition[1]];
pawnGridCell.appendChild(pawn);

//events move
document.onkeydown = function (e) {
    switch (e.key) {
        case "ArrowUp":
            pawPosition = [Math.max(pawPosition[0] - 1, 0), pawPosition[1]];
            moveElement(grid, pawn, pawPosition);
            break;
        case "ArrowDown":
            pawPosition = [Math.min(pawPosition[0] + 1, gridSize[0] - 1), pawPosition[1]];
            moveElement(grid, pawn, pawPosition);
            break;
        case "ArrowLeft":
            pawPosition = [pawPosition[0], Math.max(pawPosition[1] - 1, 0)];
            moveElement(grid, pawn, pawPosition);
            break;
        case "ArrowRight":
            pawPosition = [pawPosition[0], Math.min(pawPosition[1] + 1, gridSize[1] - 1)];
            moveElement(grid, pawn, pawPosition);
            break;
        default:
            break;
    }
};