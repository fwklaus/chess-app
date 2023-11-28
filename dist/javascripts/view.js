"use strict";
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
document.addEventListener("DOMContentLoaded", () => {
    new GameController();
});
