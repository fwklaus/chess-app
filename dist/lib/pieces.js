"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = exports.Rook = exports.Knight = exports.Bishop = exports.Queen = exports.King = void 0;
class Pawn {
    constructor() { }
    static describeAction() {
        return `I am a ${Pawn.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
    }
}
exports.Pawn = Pawn;
Pawn.type = "Pawn";
class King {
    constructor() { }
    static describeAction() {
        return `I am a ${King.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
    }
}
exports.King = King;
King.type = "King";
class Queen {
    constructor() { }
    static describeAction() {
        return `I am a ${Queen.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
    }
}
exports.Queen = Queen;
Queen.type = "Queen";
class Bishop {
    constructor(name) { }
    static describeAction() {
        return `I am a ${Bishop.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
    }
}
exports.Bishop = Bishop;
Bishop.type = "Bishop";
class Knight {
    constructor(name) { }
    static describeAction() {
        return `I am a ${Knight.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
    }
}
exports.Knight = Knight;
Knight.type = "Knight";
class Rook {
    constructor() { }
    static describeAction() {
        return `I am a ${Rook.type}. I can only move as far as I want horizontally and vertically in any direction.`;
    }
}
exports.Rook = Rook;
Rook.type = "Rook";
