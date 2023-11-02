"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
class Queen {
    constructor(position) {
        this.type = "Queen";
        this.position = position;
    }
    getPosition() {
        return ['a', 1];
    }
    move() {
        return ['a', 1];
    }
    attack() {
        return true;
    }
    describePiece() {
        return `I am a ${this.type}. I can only as far as I want in any direction. I am the most powerful piece on the board, but my King gets all the credit.`;
    }
}
exports.Queen = Queen;
