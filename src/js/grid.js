function createGrid() {
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
    return grid;
}