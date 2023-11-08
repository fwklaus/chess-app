"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = exports.Player = exports.Game = void 0;
let { Pawn, King, Queen, Rook, Bishop, Knight } = require('./pieces');
class Game {
    constructor() {
        this.player1 = new Player("p1");
        this.player2 = new Player("p2");
        this.board = new Board();
        // this.player1.setPieces(this.board.roster, this.board);
        // this.player2.setPieces(this.board.roster, this.board);
        this.initializePieces(this.player1);
        this.initializePieces(this.player2);
    }
    reset() {
        return true;
    }
    startGame() {
        return true;
    }
    initializePieces(player) {
        let roster = this.board.roster;
        let board = this.board;
        let playerType = player.type;
        let playerPieces = roster[player.type];
        let startingPieces = Object.keys(playerPieces);
        for (let i = 0; i < startingPieces.length; i++) {
            let pieceType = startingPieces[i];
            if (board.isValidPiece(pieceType)) {
                let positions = roster[playerType][pieceType];
                for (let j = 0; j < positions.length; j++) {
                    let position = positions[j];
                    if (board.isValidPosition(position)) {
                        player.setPiece(board.registerPiece(pieceType, position));
                    }
                    else {
                        throw new Error("Invalid Position");
                    }
                }
            }
            else {
                throw new Error("Invalid Piece");
            }
        }
    }
}
exports.Game = Game;
class Player {
    constructor(player) {
        this.pieces = [];
        this.type = player;
    }
    setPiece(piece) {
        this.pieces.push(piece);
        return piece;
    }
    // if player1, initialilze to p1 roster, if player2, initialize to p2 roster
    // setPieces(roster: PieceMap, board: GameBoard): void {
    //   switch(this.type) {
    //     case("p1"):
    //       this.#initializePieces(roster.p1, board);
    //       break;
    //     case("p2"):
    //       this.#initializePieces(roster.p2, board);
    //       break;
    //     default:
    //       let _exhastiveCheck = this.type;
    //       throw new Error(JSON.stringify(_exhastiveCheck));
    //   }
    // }
    // create piece, set at position, register piece to board, and add to the players pieces
    // #initializePieces(pieces: Roster, board: GameBoard): void {
    //   let types = Object.keys(pieces);
    //   for (let i = 0; i < types.length; i++) {
    //     let type = types[0];
    //     if (board.isValidPiece(type)) {
    //       let positions = pieces[type]
    //       for (let j = 0; j < positions.length; j++) {
    //         let position = positions[j];
    //         if (board.isValidPosition(position)) {
    //           this.pieces.push(board.registerPiece(type, position));
    //         } else {
    //           throw new Error("Invalid Position");
    //         }
    //       }
    //     } else {
    //       throw new Error("Invalid Piece");
    //     }
    //   }
    // }
    beginTimer() {
        console.log("6:00"); // output start time for player
    }
}
exports.Player = Player;
class Board {
    constructor() {
        this.ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.files = ['1', '2', '3', '4', '5', '6', '7', '8'];
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
    // set all squares to null on new game
    initGameBoard() {
        let squares = {};
        this.files.forEach((file) => {
            this.ranks.forEach((rank) => {
                squares[`${rank}${file}`] = null;
            });
        });
        return squares;
    }
    // create new piece and set position to initial position
    // assign the square on the board to the piece
    // return the piece
    registerPiece(piece, position) {
        let newPiece;
        switch (piece) {
            case ("pawn"):
                newPiece = new Pawn(position);
                break;
            case ("rook"):
                newPiece = new Rook(position);
                break;
            case ("bishop"):
                newPiece = new Bishop(position);
                break;
            case ("knight"):
                newPiece = new Knight(position);
                break;
            case ("queen"):
                newPiece = new Queen(position);
                break;
            case ("king"):
                newPiece = new King(position);
                break;
            default:
                throw new Error("Invalid piece");
                break;
        }
        this.assignSquare(newPiece);
        return newPiece;
    }
    // assign the piece to the new position
    // if the piece is already on the board, remove it from its old position
    assignSquare(piece, oldPos) {
        if (oldPos) {
            // remove the piece from the old position
            // assign null to old position
            // assign the piece to the new position
        }
        this.squares[piece.getPosition()] = piece;
        return this.squares[piece.getPosition()];
    }
    isValidPiece(name) {
        return name === 'pawn' ||
            name === 'rook' ||
            name === 'knight' ||
            name === 'bishop' ||
            name === 'queen' ||
            name === 'king';
    }
    isValidPosition(pos) {
        let rank = pos[0];
        let file = pos[1];
        return pos.length === 2 && this.ranks.includes(rank) && this.files.includes(file);
    }
}
exports.Board = Board;
