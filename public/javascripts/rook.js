"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
class Rook {
    constructor() {
        this.type = "Rook";
        this.initial = true;
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
        return `I am a ${this.type}. I can only move as far as I want horizontally and vertically in any direction.`;
    }
}
exports.Rook = Rook;
