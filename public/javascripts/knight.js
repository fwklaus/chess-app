"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
class Knight {
    constructor(position) {
        this.type = "Knight";
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
        return `I am a ${this.type}. I can jump over pieces. I also move in an L shape - either 1 up and 2 over, or 1 over and 2 up - in any direction.`;
    }
}
exports.Knight = Knight;
