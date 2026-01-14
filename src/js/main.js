"use strict"

let gridSize = [8, 8];
let pawnSize = [50, 50];
let pawnSrc = "https://maxime-dulieu.fr/assets/logosCompetences/javascript.jpg"
let pawnPosition = [0, 0]
let bonusSize = [50, 50];
let bonusSrc = "../assets/bonus.png"
let bonusPosition = [0, 0]
let congratulationPawnSize = [50, 50];
let congratulationPawnSrc = "../assets/bravo.png"
let congratulationPawnPosition = [0, 0];
let gameEnded = false;

let grid = createGrid();

let pawn = initPawn();

let bonus = initBonus();
initBonusMovement(bonus);

checkCollision();
