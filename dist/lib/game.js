"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Game = void 0;
class Game {
    // board: GameBoard;
    constructor() {
        this.player1 = new Player("player1");
        this.player2 = new Player("player2");
        // this.board = new Board();
    }
    reset() {
        return true;
    }
    startGame() {
        return true;
    }
}
exports.Game = Game;
class Player {
    constructor(player) {
        this.pieces = [];
        this.setPieces(player);
    }
    setPieces(player) {
        switch (player) {
            case ("player1"):
                this.setPlayer1();
                break;
            case ("player2"):
                this.setPlayer2();
                break;
            default:
                let _exhastiveCheck = player;
                throw new Error(JSON.stringify(_exhastiveCheck));
        }
    }
    // set this.pieces directly if player 1 
    setPlayer1() {
        // const P1_PAWN_FILE = 2;
        return this.pieces;
    }
    // set this.pieces directly if player 2
    setPlayer2() {
        // const P2_PAWN_FILE = 7;
        return this.pieces;
    }
    beginTimer() {
        console.log("6:00"); // output start time for player
    }
}
exports.Player = Player;
