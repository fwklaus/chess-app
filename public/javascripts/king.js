"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
class King {
    constructor() {
        this.type = "King";
        this.check = false;
        this.checkMate = false;
        this.initial = true;
    }
    getPosition() {
        return ['a', 1];
    }
    isThreatPostion() {
        return false;
    }
    move() {
        return ['a', 1];
    }
    attack() {
        return true;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square in any direction. If I am cornered, the game is over.`;
    }
}
exports.King = King;
