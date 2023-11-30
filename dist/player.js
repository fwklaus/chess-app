"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor(player) {
        this.pieces = [];
        this.time = "6:00";
        this.type = player;
    }
    // sets the initial position of a piece on the board
    addPiece(piece) {
        this.pieces.push(piece);
        return piece;
    }
    beginTimer() {
        // will require some mathematics
        // use setInterval to decrement the clock when the timer starts
        // must update the DOM - countdown as the timer counts up
        console.log(this.time); // output start time for player
    }
    validMoves(state) {
        return [];
    }
}
exports.default = Player;
