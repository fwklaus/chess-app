"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const piece_1 = __importDefault(require("./piece"));
class Rook extends piece_1.default {
    constructor(position) {
        super(position);
        this.type = "rook";
        this.initial = true;
    }
}
exports.default = Rook;
