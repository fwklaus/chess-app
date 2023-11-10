export {}
const {Board, Player, Game} = require("./lib/game");
const { Pawn, Rook, Knight, Bishop, Queen, King } = require("./lib/pieces");

document.addEventListener("DOMContentLoaded", (_event) => {
  // test timer
  // need class to handle interaction with the DOM
  // 

  new Game();
});
 