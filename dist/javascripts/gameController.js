"use strict";
class GameController {
    constructor() {
        this.handlers = new Handlers();
        this.view = new View(this.handlers);
        this.player1 = new Player("p1");
        this.player2 = new Player("p2");
        this.board = new Board();
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
