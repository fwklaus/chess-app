"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
class Bishop {
    constructor() {
        this.type = "Bishop";
    }
    move() {
        return ['a', 1];
    }
    attack() {
        return true;
    }
    getPosition() {
        return ['a', 1];
    }
    describePiece() {
        return `I am a ${this.type}. I move as far as I want diagonally in any direction. I'm the right hand for the King and the Queen.`;
    }
}
exports.Bishop = Bishop;
