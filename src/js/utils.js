function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveElement(grid, element, newPosition) {
    grid.rows[newPosition[0]].cells[newPosition[1]].appendChild(element);
}