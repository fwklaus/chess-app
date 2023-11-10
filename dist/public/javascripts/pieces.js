"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = exports.Queen = exports.Bishop = exports.Knight = exports.Rook = exports.Pawn = exports.Piece = void 0;
class Piece {
    constructor(position) {
        this.position = null;
        this.setPosition(position);
    }
    setPosition(position) {
        this.position = position;
        return this.position;
    }
    getPosition() {
        if (this.position === null) {
            throw new Error("Invalid request. Cannot get piece position until one is set");
        }
        else {
            return this.position;
        }
    }
}
exports.Piece = Piece;
class Pawn extends Piece {
    constructor(position) {
        super(position);
        this.type = "pawn";
    }
    promote(type, player) {
        if (this.position === null) {
            throw new Error("Invalid call. Cannot promote piece that is set to null");
        }
        if (this.isPromotablePos(player)) {
            switch (type) {
                case ("rook"):
                    return new Rook(this.position);
                    break;
                case ("knight"):
                    return new Knight(this.position);
                    break;
                case ("bishop"):
                    return new Bishop(this.position);
                    break;
                case ("queen"):
                    return new Queen(this.position);
                    break;
                default:
                    let _exhaustiveCheck = type;
                    throw new Error("Invalid type: " + JSON.stringify(_exhaustiveCheck));
            }
        }
        else {
            throw new Error("Cannot promote pawn unless in promotable position");
        }
    }
    isPromotablePos(player) {
        let promotablePositions;
        switch (player) {
            case ("p1"):
                promotablePositions = ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];
                return promotablePositions.includes(this.position);
                break;
            case ("p2"):
                promotablePositions = ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'];
                return promotablePositions.includes(this.position);
                break;
            default:
                let _exhaustiveCheck = player;
                throw new Error("Invalid player type: Player can either be 'p1' or 'p2'");
                break;
        }
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
    }
}
exports.Pawn = Pawn;
class Rook extends Piece {
    constructor(position) {
        super(position);
        this.type = "rook";
    }
    describePiece() {
        return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
    }
}
exports.Rook = Rook;
class Knight extends Piece {
    constructor(position) {
        super(position);
        this.type = "knight";
    }
    describePiece() {
        return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
    }
}
exports.Knight = Knight;
class Bishop extends Piece {
    constructor(position) {
        super(position);
        this.type = "bishop";
    }
    describePiece() {
        return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
    }
}
exports.Bishop = Bishop;
class Queen extends Piece {
    constructor(position) {
        super(position);
        this.type = "queen";
    }
    describePiece() {
        return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
    }
}
exports.Queen = Queen;
class King extends Piece {
    constructor(position) {
        super(position);
        this.type = "king";
        this.check = false;
        this.checkMate = false;
    }
    isThreatPostion() {
        return false;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
    }
}
exports.King = King;
