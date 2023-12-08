// need to import all pieces

import Pawn from "./pawn";
import Rook from "./rook";
import Knight from "./knight";
import Bishop from "./bishop";
import King from "./king";
import Queen from "./queen";

export default class Board implements GameBoard {
  squares;
  ranks = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  files = ['1', '2', '3', '4', '5', '6', '7', '8'];
  startPos = {
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

    constructor() {
        this.squares = this.clearBoard();
    }

    // set all squares to null on new game
    clearBoard(): Squares {
        let squares: Squares = {};
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
    registerPiece(piece: string, position: string) {
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
    assignSquare(piece: GamePiece): GamePiece {
      // if the piece is already on the board, remove it from its old position


        this.squares[piece.getPosition()] = piece;
        return this.squares[piece.getPosition()] as GamePiece;
    }

    // isValidPiece(name) {
    //     return name === 'pawn' ||
    //         name === 'rook' ||
    //         name === 'knight' ||
    //         name === 'bishop' ||
    //         name === 'queen' ||
    //         name === 'king';
    // }
    // isValidPosition(pos) {
    //     let rank = pos[0];
    //     let file = pos[1];
    //     return pos.length === 2 && this.ranks.includes(rank) && this.files.includes(file);
    // }
}