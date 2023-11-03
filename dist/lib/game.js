"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = exports.Player = exports.Game = void 0;
class Game {
    constructor() {
        this.player1 = new Player("p1");
        this.player2 = new Player("p2");
        this.board = new Board(this.player1, this.player2);
        this.player1.setPieces(this.board.roster);
        this.player2.setPieces(this.board.roster);
        this.board.registerPieces(this.player1.pieces, this.player2.pieces);
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
        this.type = player;
    }
    setPieces(roster) {
        switch (this.type) {
            case ("p1"):
                this.initializePieces(roster.p1);
                break;
            case ("p2"):
                this.initializePieces(roster.p2);
                break;
            default:
                let _exhastiveCheck = this.type;
                throw new Error(JSON.stringify(_exhastiveCheck));
        }
    }
    initializePieces(pieces) {
        // for each registered square of each piece, create a piece and register that piece
        // set the pieces position to the registered position
    }
    beginTimer() {
        console.log("6:00"); // output start time for player
    }
}
exports.Player = Player;
class Board {
    constructor(player1, player2) {
        this.ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.files = [1, 2, 3, 4, 5, 6, 7, 8];
        this.roster = {
            "p1": {
                "pawn": ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
                "rook": ['a1', 'h1'],
                "knight": ['b1', 'g1'],
                "bishop": ['c1', 'f1'],
                "queen": ['d1'],
                "king": ['g1'],
            },
            "p2": {
                "pawn": ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
                "rook": ['a8', 'h8'],
                "knight": ['b8', 'g8'],
                "bishop": ['c8', 'f8'],
                "queen": ['d8'],
                "king": ['g8'],
            },
        };
        this.squares = this.initGameBoard();
    }
    initGameBoard() {
        let squares = {};
        this.files.forEach((file) => {
            this.ranks.forEach((rank) => {
                squares[`${rank}${file}`] = null;
            });
        });
        return squares;
    }
    registerPieces(player1, player2) {
    }
}
exports.Board = Board;
