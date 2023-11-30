"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlers_1 = __importDefault(require("./handlers"));
const view_1 = __importDefault(require("./view"));
const player_1 = __importDefault(require("./player"));
const board_1 = __importDefault(require("./board"));
class GameController {
    constructor() {
        this.handlers = new handlers_1.default();
        this.view = new view_1.default(this.handlers);
        this.player1 = new player_1.default("p1");
        this.player2 = new player_1.default("p2");
        this.board = new board_1.default();
        this.initializePieces(this.player1);
        this.initializePieces(this.player2);
    }
    setTime(time) {
        this.player1.time = time;
        this.player2.time = time;
        return time;
    }
    newGame() {
        // return true;
    }
    startGame() {
        // game loop
        // alternate player turns until the game is over
        // the game ends when
        // a king is in checkmate
        // when there is a stalemate
        // when a player gives up
        // when the time runs out for a player
        return true;
    }
    playerTurn() {
        // start timer
        // wait for move to be made
        // handle movement, provide feedback if bad move
        // move piece if valid move
        // end timer
    }
    computerTurn() {
        // start timer
        // calculate the best move (use libary or package?)
        // move piece 
        // end timer
    }
    initializePieces(player) {
        //     let roster = this.board.startPos;
        //     let board = this.board;
        //     let playerType = player.type;
        //     let playerPieces = roster[playerType];
        //     let startingPieces = Object.keys(playerPieces);
        //     for (let i = 0; i < startingPieces.length; i++) {
        //         let pieceType = startingPieces[i];
        //         if (board.isValidPiece(pieceType)) {
        //             let positions = roster[playerType][pieceType];
        //             for (let j = 0; j < positions.length; j++) {
        //                 let position = positions[j];
        //                 if (board.isValidPosition(position)) {
        //                     player.addPiece(board.registerPiece(pieceType, position));
        //                 }
        //                 else {
        //                     throw new Error("Invalid Position");
        //                 }
        //             }
        //         }
        //         else {
        //             throw new Error("Invalid Piece");
        //         }
        //     }
    }
}
exports.default = GameController;
