"use strict"

let gridSize = [8, 8];
let pawnSize = [50, 50];
let pawnSrc = "https://maxime-dulieu.fr/assets/logosCompetences/javascript.jpg"
let pawnPosition = [0, 0]
let bonusSize = [50, 50];
let bonusSrc = "../assets/bonus.png"
let bonusPosition = [0, 0]
let congratulationPawnSrc = "../assets/bravo.png"

let grid = createGrid();

let pawn = initPawn();

let bonus = initBonus();
bonusMovement(bonus);
let interval = setInterval(bonusMovement, 2000, bonus);
