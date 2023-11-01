"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const bishop_1 = require("./bishop");
const knight_1 = require("./knight");
const queen_1 = require("./queen");
const rook_1 = require("./rook");
class Pawn {
    constructor() {
        this.type = "Pawn";
        this.initial = true;
        this.initialMove = false;
    }
    promote(type) {
        switch (type) {
            case ("rook"):
                return new rook_1.Rook();
                break;
            case ("knight"):
                return new knight_1.Knight();
                break;
            case ("bishop"):
                return new bishop_1.Bishop();
                break;
            case ("queen"):
                return new queen_1.Queen();
                break;
            default:
                let _exhaustiveCheck = type;
                throw new Error("Invalid " + JSON.stringify(_exhaustiveCheck));
        }
    }
    isPromotable() {
        return false;
    }
    getPosition() {
        return ["a", 1];
    }
    move() {
        return ["a", 1];
    }
    attack() {
        return true;
    }
    describePiece() {
        return `I am a ${this.type}. I can only move forward 1 square at a time. But when I attack, I can only move forward diagonally by 1 square.`;
    }
}
exports.Pawn = Pawn;
