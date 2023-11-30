"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameController_1 = __importDefault(require("./gameController"));
class View {
    constructor(handlers) {
        this.startButton = null;
        this.boardSquares = document.querySelectorAll("div.square");
        this.playerPieces = document.querySelectorAll("img.player");
        this.startButton = document.querySelector("#start");
        this.bindListeners(handlers);
    }
    bindListeners(handlers) {
        var _a;
        (_a = this.startButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handlers.handleStart);
    }
}
exports.default = View;
document.addEventListener("DOMContentLoaded", () => {
    new gameController_1.default();
});
