"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
class View {
    constructor(handlers) {
        this.startButton = null;
        this.selectBoardSquares();
        this.selectPlayerPieces();
        this.selectStartButton();
        this.bindListeners(handlers);
    }
    selectBoardSquares() {
        this.boardSquares = document.querySelectorAll("div.square");
    }
    selectPlayerPieces() {
        this.playerPieces = document.querySelectorAll("img.player");
    }
    selectStartButton() {
        this.startButton = document.querySelector("#start");
    }
    bindListeners(handlers) {
        var _a;
        (_a = this.startButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handlers.handleStart);
    }
}
exports.View = View;
