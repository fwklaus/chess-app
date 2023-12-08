"use strict";
// need to import all pieces
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pawn_1 = __importDefault(require("./pawn"));
const rook_1 = __importDefault(require("./rook"));
const knight_1 = __importDefault(require("./knight"));
const bishop_1 = __importDefault(require("./bishop"));
const king_1 = __importDefault(require("./king"));
const queen_1 = __importDefault(require("./queen"));
class Board {
    constructor() {
        this.ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this.files = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.startPos = {
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
        this.squares = this.clearBoard();
    }
    // set all squares to null on new game
    clearBoard() {
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
                newPiece = new pawn_1.default(position);
                break;
            case ("rook"):
                newPiece = new rook_1.default(position);
                break;
            case ("bishop"):
                newPiece = new bishop_1.default(position);
                break;
            case ("knight"):
                newPiece = new knight_1.default(position);
                break;
            case ("queen"):
                newPiece = new queen_1.default(position);
                break;
            case ("king"):
                newPiece = new king_1.default(position);
                break;
            default:
                throw new Error("Invalid piece");
                break;
        }
        this.assignSquare(newPiece);
        return newPiece;
    }
    // assign the piece to the new position
    assignSquare(piece) {
        // if the piece is already on the board, remove it from its old position
        this.squares[piece.getPosition()] = piece;
        return this.squares[piece.getPosition()];
    }
}
exports.default = Board;
